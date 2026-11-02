import { connectDB } from "@/lib/db";
import userModel from "@/lib/models/userModel";
import { getUserId } from "@/lib/auth";

// Add products to specific user cart — mirrors cartController.addToCart
export async function POST(request) {
  const { userId, error } = getUserId(request);
  if (error) return error;
  await connectDB();

  try {
    const { itemId, size } = await request.json();

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    return Response.json({ success: true, message: 'Added To Cart' });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
