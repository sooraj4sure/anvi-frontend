import { connectDB } from "@/lib/db";
import userModel from "@/lib/models/userModel";
import { getUserId } from "@/lib/auth";

// get user cart data — mirrors cartController.getUserCart
export async function POST(request) {
  const { userId, error } = getUserId(request);
  if (error) return error;
  await connectDB();

  try {
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    return Response.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
