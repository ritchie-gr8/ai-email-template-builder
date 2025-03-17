import Image from "next/image";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="mb-8">
        <div className="flex items-center">
          <Image src={"/loading-logo.svg"} alt="LogoIpsum" width={150} height={48} />
        </div>
      </div>

      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-pink-100 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-8 border-primary rounded-full border-t-transparent animate-spin"></div>
      </div>

      <h2 className="mt-8 text-xl font-medium text-gray-700">Loading...</h2>
      <p className="mt-2 text-gray-500">
        Please wait while we prepare your content
      </p>
    </div>
  );
};

export default LoadingPage;
