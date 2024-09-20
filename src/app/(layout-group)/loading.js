import React from "react";

const Loading = () => {
  return (
    <div className="mx-auto my-12 w-16 h-16 rounded-full bg-[radial-gradient(farthest-side,var(--color-brand-600)_94%,transparent)_top/10px_10px_no-repeat,conic-gradient(transparent_30%,var(--color-brand-600))] mask-[radial-gradient(farthest-side,transparent_calc(100%-10px),#000_0)] animate-rotate"></div>
  );
};

export default Loading;
