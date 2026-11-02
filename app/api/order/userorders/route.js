import { connectDB } from "@/lib/db";
import orderModel from "@/lib/models/orderModel";
import { getUserId } from "@/lib/auth";

// user order data for frontend — mirrors orderController.userOrders
export async function POST(request) {
  const { userId, error } = getUserId(request);
  if (error) return error;
  await connectDB();

  try {
    const orders = await orderModel.find({ userId });
    return Response.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
