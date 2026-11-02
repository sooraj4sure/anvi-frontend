import jwt from 'jsonwebtoken';

// Port of backend/middleware/auth.js (authUser).
// Reads the 'token' header, verifies it with JWT_SECRET and returns the
// userId. On failure returns { error: Response } with the same JSON shape.
export function getUserId(request) {
  const token = request.headers.get('token');

  if (!token) {
    return { error: Response.json({ success: false, message: 'Not Authorized Login Again' }) };
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    return { userId: token_decode.id };
  } catch (error) {
    console.log(error);
    return { error: Response.json({ success: false, message: error.message }) };
  }
}

// Port of backend/middleware/adminAuth.js.
// Expects `Authorization: Bearer <token>` and requires the admin payload
// ({ adminId, role: 'admin' }), keeping the original 401/403 JSON shapes.
export function requireAdmin(request) {
  try {
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.split(' ')[1]; // Get token after "Bearer "

    if (!token) {
      return { error: Response.json({ success: false, message: 'No token provided' }, { status: 401 }) };
    }

    // Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if token has admin credentials
    if (!decoded.adminId || decoded.role !== 'admin') {
      return { error: Response.json({ success: false, message: 'Admin access required' }, { status: 403 }) };
    }

    return { admin: decoded };
  } catch (error) {
    console.log('Auth error:', error.message);

    if (error.name === 'TokenExpiredError') {
      return { error: Response.json({ success: false, message: 'Token expired' }, { status: 401 }) };
    }

    return { error: Response.json({ success: false, message: 'Invalid token' }, { status: 401 }) };
  }
}
