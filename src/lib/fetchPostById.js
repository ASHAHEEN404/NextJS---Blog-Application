import { ObjectId } from "mongodb";
import connectDB from "./db";

const fetchPostByID = async (id) => {
  const db = await connectDB();
  return await db.collection("posts").findOne({ _id: new ObjectId(id) });
};

export default fetchPostByID;
