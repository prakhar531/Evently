// common pattern used in nodejs applications specially in serverless environments as versale.
//This technique is used to cached database connection in this case mongodb from mongoose across multiple invocation of server less api routes in next js.

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
};
