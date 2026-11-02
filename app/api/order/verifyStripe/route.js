import { connectDB } from "@/lib/db";
import orderModel from "@/lib/models/orderModel";
import userModel from "@/lib/models/userModel";
import { getUserId } from "@/lib/auth";

// verify stripe — mirrors orderController.verifyStripe
export async function POST(request) {
  const { userId, error: authError } = getUserId(request);
  if (authError) return authError;
  await connectDB();

  const { orderId, success } = await request.json();
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      return Response.json({ success: true });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      // NOTE: the original code referenced `error.message` here where `error`
      // was undefined (a latent bug). Kept the same branch, with a safe fallback.
      return Response.json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
