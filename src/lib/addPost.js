import connectDB from "./db";

const addPost = async ({ title, body, imageUrl }) => {
  const database = await connectDB();

  const post = {
    title,
    body,
    imageUrl,
  };

  return await database.collection("posts").insertOne(post);
};

export default addPost;
