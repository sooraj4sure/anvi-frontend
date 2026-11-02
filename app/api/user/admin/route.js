import jwt from "jsonwebtoken";

//--------------------------------------- Route For admin --------------------------------------
export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ success: false, message: "Invalid credentials" }, { status: 401 });
    }

    // Create secure token payload
    const tokenPayload = {
      adminId: "admin", // Or use a real ID if you have DB storage
      role: "admin"
    };

    // Generate token with expiration
    const token = jwt.sign(
      tokenPayload,
      process.env.JWT_SECRET,
      { expiresIn: '8h' } // Token expires in 8 hours
    );

    return Response.json({
      success: true,
      token: token,
      message: "Login successful"
    });

  } catch (error) {
    console.error("Admin login error:", error);
    return Response.json(
      {
        success: false,
        message: "Server error during login"
      },
      { status: 500 }
    );
  }
}
