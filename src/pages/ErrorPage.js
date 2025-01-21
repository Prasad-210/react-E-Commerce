import React from "react";
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError(); // Get the error object

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-5xl font-bold mb-4">Oops! ⚠</h1>
        <h2 className="text-2xl mb-4">{err.status} - {err.statusText}</h2>
        <p className="text-lg mb-6">{err.data}</p>
        <Link
          to="/"
          className="bg-white text-red-500 py-2 px-6 rounded-md font-semibold hover:bg-gray-200 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
