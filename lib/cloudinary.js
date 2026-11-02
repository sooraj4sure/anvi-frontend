import { v2 as cloudinary } from 'cloudinary';

// Mirrors backend/config/cloudinary.js (connectCloudinary) — the env var
// names used there (CLOUDINARY_NAME / CLOUDINARY_API_KEY /
// CLOUDINARY_SECRET_KEY) match the values in backend/.env.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export default cloudinary;
