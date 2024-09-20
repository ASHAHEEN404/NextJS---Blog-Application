import connectDB from "./db";

const getPosts = async () => {
  const db = await connectDB(); 
  return await db.collection("posts").find().toArray(); 
};

export default getPosts;
