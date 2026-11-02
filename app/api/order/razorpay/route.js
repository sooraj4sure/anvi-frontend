import { connectDB } from "@/lib/db";
import { getUserId } from "@/lib/auth";

// placing order on Razorpay — mirrors orderController.placeOrderRazorpay
// (empty in the original; kept as an unimplemented stub that returns a
// JSON response instead of hanging)
export async function POST(request) {
  const { error } = getUserId(request);
  if (error) return error;
  await connectDB();

  return Response.json({ success: false, message: "Razorpay not implemented" });
}
