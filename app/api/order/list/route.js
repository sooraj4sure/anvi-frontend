import { connectDB } from "@/lib/db";
import orderModel from "@/lib/models/orderModel";
import { requireAdmin } from "@/lib/auth";

// all order for admin panel — mirrors orderController.allOrders
export async function POST(request) {
  const { error } = requireAdmin(request);
  if (error) return error;
  await connectDB();

  try {
    const orders = await orderModel.find({});
    return Response.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
