import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import userModel from "@/lib/models/userModel";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// -------------------------------------------- Route for user Login------------------------------
export async function POST(request) {
  await connectDB();
  try {
    const { email, password } = await request.json();
    const user = await userModel.findOne({ email });

    if (!user) {
      return Response.json({
        success: false,
        message: "User does not exists create new account",
      });
    }

    const isMatch = await bycrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      return Response.json({ success: true, token });
    } else {
      return Response.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
