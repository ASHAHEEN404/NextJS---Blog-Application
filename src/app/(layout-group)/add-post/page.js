import React from "react";
import addPost from "@/lib/addPost";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const AddPost = () => {
  const create = async (formData) => {
    "use server";

    const file = formData.get("image");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { tags: ["nextjs-server-actions-upload-sneakers"] },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });

    const imageUrl = result.secure_url;
    const title = formData.get("title");
    const body = formData.get("body");

    await addPost({ title, body, imageUrl });

    revalidatePath("/blog");
    redirect("blog");
  };

  return (
    <div className="max-w-lg p-8 mx-auto mt-10 border border-gray-300 shadow-lg rounded-xl bg-gradient-to-b from-gray-50 to-white">
      <h1 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
        Create New Post
      </h1>
      <form className="space-y-6" action={create}>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Post Title
          </label>
          <input
            className="w-full px-4 py-2 transition duration-200 border border-gray-300 rounded-lg shadow-sm bg-slate-300 focus:ring focus:ring-blue-500 focus:border-blue-500"
            name="title"
            type="text"
            placeholder="Enter the title"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Post Description
          </label>
          <textarea
            className="w-full px-4 py-2 transition duration-200 border border-gray-300 rounded-lg shadow-sm bg-slate-300 focus:ring focus:ring-blue-500 focus:border-blue-500"
            name="body"
            rows="4"
            placeholder="Enter the post description"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full px-4 py-2 transition duration-200 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 font-semibold text-white transition duration-300 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500"
        >
          Upload Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
