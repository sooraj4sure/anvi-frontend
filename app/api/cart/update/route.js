import { connectDB } from "@/lib/db";
import userModel from "@/lib/models/userModel";
import { getUserId } from "@/lib/auth";

// update user cart — mirrors cartController.updateCart
export async function POST(request) {
  const { userId, error } = getUserId(request);
  if (error) return error;
  await connectDB();

  try {
    const { itemId, size, quantity } = await request.json();
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    return Response.json({ success: true, message: 'Cart Updated' });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
