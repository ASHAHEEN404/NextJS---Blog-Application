"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ id, title, body, imageUrl }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/post/${id}`);
  };

  return (
    <div className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-48"
        onClick={handleNavigate}
      />
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600">
          {body.length > 100 ? `${body.substring(0, 100)}...` : body}
        </p>
        <button
          onClick={handleNavigate}
          className="px-4 py-2 mt-4 font-medium text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Card;
