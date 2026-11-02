import { connectDB } from "@/lib/db";
import orderModel from "@/lib/models/orderModel";
import { requireAdmin } from "@/lib/auth";

// update order status from admin panel — mirrors orderController.updateStatus
export async function POST(request) {
  const { error } = requireAdmin(request);
  if (error) return error;
  await connectDB();

  try {
    const { orderId, status } = await request.json();
    await orderModel.findByIdAndUpdate(orderId, { status });
    return Response.json({ success: true, message: 'Status Updated' });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
