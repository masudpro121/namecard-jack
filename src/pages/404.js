import { useRouter } from "next/router";
import React from 'react';

const ComingSoon = () => {
  const router = useRouter()
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg md:text-xl text-gray-600">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <button className="mt-5 bg-gray-100 font-semibold px-5 py-1 rounded-sm" onClick={()=>router.back()}>Go Back</button>
      </div>
    </div>
  );
};

export default ComingSoon;
