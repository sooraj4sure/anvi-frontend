import { connectDB } from "@/lib/db";
import productModel from "@/lib/models/productModel";
import { requireAdmin } from "@/lib/auth";

// Get Single Product (with error handling) — mirrors productController.singleProduct
export async function POST(request) {
  await connectDB();
  try {
    const { productId } = await request.json();

    if (!productId) {
      return Response.json(
        {
          success: false,
          message: "Product ID is required"
        },
        { status: 400 }
      );
    }

    const product = await productModel.findById(productId);

    if (!product) {
      return Response.json(
        {
          success: false,
          message: "Product not found"
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      product
    });

  } catch (error) {
    console.error("Single product error:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to fetch product"
      },
      { status: 500 }
    );
  }
}
