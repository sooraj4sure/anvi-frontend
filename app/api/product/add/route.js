import { connectDB } from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import productModel from "@/lib/models/productModel";
import { requireAdmin } from "@/lib/auth";

// Mirrors the multer limits/error messages from backend/middleware/multer.js
// and the error-handling middleware in backend/routes/productRoute.js
const MAX_FILES = 4;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB max per file
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "products" },
      (uploadError, result) => {
        if (uploadError) reject(uploadError);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });
}

// Add Product — mirrors productController.addProduct; the route mounted
// upload.array("images", 4) so the multipart parsing is done here with the
// same limits and error messages.
export async function POST(request) {
  const { error: authError } = requireAdmin(request);
  if (authError) return authError;
  await connectDB();

  try {
    const formData = await request.formData();
    const files = formData.getAll("images").filter((f) => f && f.size > 0);

    // Multer-equivalent limits
    if (files.length > MAX_FILES) {
      return Response.json(
        { success: false, message: "Maximum 4 images allowed" },
        { status: 400 }
      );
    }

    for (const file of files) {
      if (!ALLOWED_MIME_TYPES.includes(file.type)) {
        return Response.json(
          { success: false, message: "Invalid file type. Only JPEG/PNG/WEBP/JPG allowed" },
          { status: 400 }
        );
      }
      if (file.size > MAX_FILE_SIZE) {
        // NOTE: original message says 5MB while the limit is 10MB — kept verbatim
        return Response.json(
          { success: false, message: "File too large (max 5MB)" },
          { status: 400 }
        );
      }
    }

    const { name, description, price, category, subCategory, sizes, bestseller, mrp } =
      Object.fromEntries(formData.entries());

    // Process images from memory (no file system access)
    const imagesUrl = await Promise.all(
      files.map(async (file) => {
        try {
          const buffer = Buffer.from(await file.arrayBuffer());
          const result = await uploadToCloudinary(buffer);
          return result.secure_url;
        } catch (uploadError) {
          console.error("Cloudinary upload failed:", uploadError);
          throw new Error(`Failed to upload ${file.name}`);
        }
      })
    );

    // Validate at least one image
    if (imagesUrl.length === 0) {
      return Response.json(
        {
          success: false,
          message: "At least one image is required"
        },
        { status: 400 }
      );
    }

    // Create product data
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      mrp: Number(mrp),
      subCategory,
      bestseller: Boolean(bestseller),
      sizes: JSON.parse(sizes || "[]"),
      images: imagesUrl,
      date: Date.now()
    };

    // Save to database
    const product = new productModel(productData);
    await product.save();

    return Response.json({
      success: true,
      message: "Product Added",
      productId: product._id
    });

  } catch (error) {
    console.error("Add product error:", error);
    return Response.json(
      {
        success: false,
        message: error.message || "Failed to add product"
      },
      { status: 500 }
    );
  }
}
