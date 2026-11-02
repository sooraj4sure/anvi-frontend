import mongoose from 'mongoose';

// Serverless-safe connection cache (replaces backend/config/mongodb.js,
// whose original body was junk — an express server.listen — so only the
// mongoose.connect call is ported here).
const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not set');
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(`${MONGODB_URI}/anvi`).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
