import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          {`Oops! Love got lost... 💝`}
        </h2>
        <p className="text-gray-600 mb-8">
          {`The page you're looking for seems to have wandered off to find its valentine!`}
        </p>
        <Link
          href="/"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
        >
          {`Return to Home 🏡`}
        </Link>
      </div>
    </div>
  );
}
