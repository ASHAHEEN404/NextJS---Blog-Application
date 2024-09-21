import connectDB from "./db";

const addPost = async ({ title, body, imageUrl }) => {
  try {
    const database = await connectDB();
    const post = {
      title,
      body,
      imageUrl,
      createdAt: new Date(), // Optionally add a timestamp
    };

    const result = await database.collection("posts").insertOne(post);
    console.log(`New post created with the following id: ${result.insertedId}`);
    return result;
  } catch (error) {
    console.error("Error adding post:", error);
    throw new Error("Failed to add post.");
  }
};

export default addPost;
