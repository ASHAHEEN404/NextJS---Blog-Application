"use client";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <>
      <h1 className="text-red-700">Something went wrong, please try again.</h1>
      <h1 className="text-red-700">{error.message}</h1>
      <button onClick={reset}>Try again</button>
    </>
  );
};

export default Error;
