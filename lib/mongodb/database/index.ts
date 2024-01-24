// common pattern used in nodejs applications specially in serverless environments as versal.
//This technique is used to cached database connection in this case mongodb from mongoose across multiple invocation of server less api routes in next js.

//In serverless environment or connections code can be executed multiple number of times but not in a single continuous process so we have to manage database connection efficiently.Because each evocation to serverless connection can leads to form a new connection to database.

//In case of server action each function will call connectDatebase if we will not cache the connection we may end up in having multiple connection.So we can use our existing connection

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
