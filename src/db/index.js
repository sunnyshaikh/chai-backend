import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionIns = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Mongo DB connection sucess!!", connectionIns.connection.host)
  }
  catch(err) {
    console.log("MongoDB connection failed!!", err);
    process.exit(1);
  }
}

export default connectDB;