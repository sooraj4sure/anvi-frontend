import { connectDB } from "@/lib/db";
import orderModel from "@/lib/models/orderModel";
import userModel from "@/lib/models/userModel";
import { getUserId, requireAdmin } from "@/lib/auth";

// placing order on COD — mirrors orderController.placeOrder
export async function POST(request) {
  const { userId, error } = getUserId(request);
  if (error) return error;
  await connectDB();

  try {
    const { items, amount, address } = await request.json();
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    return Response.json({ success: true, message: "order placed" });

  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
