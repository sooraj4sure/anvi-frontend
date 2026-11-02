import validator from "validator";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import userModel from "@/lib/models/userModel";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// ----------------------------------Route for user registration---------------------------------------------
export async function POST(request) {
  await connectDB();
  try {
    const { name, email, password } = await request.json();

    // checking user exist or not
    const exists = await userModel.findOne({ email });

    if (exists) {
      return Response.json({ success: false, message: "User already exists" });
    }

    //  validate email format & strong password

    if (!validator.isEmail(email)) {
      return Response.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return Response.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // hashing user password

    const salt = await bycrypt.genSalt(10);
    const hasedPassword = await bycrypt.hash(password, salt);

    // new user

    const newUser = new userModel({
      name,
      email,
      password: hasedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    return Response.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
