"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <p className="mt-4 text-lg">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
