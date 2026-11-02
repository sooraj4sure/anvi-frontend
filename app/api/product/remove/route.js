import { connectDB } from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import productModel from "@/lib/models/productModel";
import { requireAdmin } from "@/lib/auth";

// Remove Product (with validation) — mirrors productController.removeProduct
export async function POST(request) {
  const { error } = requireAdmin(request);
  if (error) return error;
  await connectDB();

  try {
    const { id } = await request.json();

    // Validate ID
    if (!id || typeof id !== 'string') {
      return Response.json(
        {
          success: false,
          message: "Valid product ID is required"
        },
        { status: 400 }
      );
    }

    // Find and delete product
    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return Response.json(
        {
          success: false,
          message: "Product not found"
        },
        { status: 404 }
      );
    }

    // Delete associated images from Cloudinary (if they exist)
    if (deletedProduct.images?.length > 0) {
      try {
        await Promise.all(
          deletedProduct.images.map(async (url) => {
            // Extract public_id from Cloudinary URL
            const publicId = url.split('/').pop().split('.')[0];
            if (publicId) {
              await cloudinary.uploader.destroy(`products/${publicId}`);
            }
          })
        );
      } catch (cloudinaryError) {
        console.error("Cloudinary deletion error:", cloudinaryError);
        // Continue even if Cloudinary deletion fails (log but don't block)
      }
    }

    return Response.json(
      {
        success: true,
        message: "Product deleted successfully"
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Remove product error:", error);
    return Response.json(
      {
        success: false,
        message: error.message || "Internal server error"
      },
      { status: 500 }
    );
  }
}
