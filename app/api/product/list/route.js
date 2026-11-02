import { connectDB } from "@/lib/db";
import productModel from "@/lib/models/productModel";
import { demoProducts } from "@/lib/demoProducts";

// List Products (optimized) — mirrors productController.listProducts
// Falls back to bundled demo products when MongoDB is unreachable
// (e.g. DNS failure), so the shop keeps working offline.
export async function GET() {
  try {
    await connectDB();
    const products = await productModel.find({}).lean();
    return Response.json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    console.warn("List products: DB unavailable, serving demo data.", error?.message || error);
    return Response.json({
      success: true,
      count: demoProducts.length,
      products: demoProducts,
      demo: true
    });
  }
}
