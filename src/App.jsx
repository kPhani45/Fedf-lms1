import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    // ✅ Removed double backgrounds and centered cleanly
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      
      {/* Login Card */}
      <div className="p-10 rounded-3xl shadow-2xl text-center max-w-md w-[90%] bg-white/10 backdrop-blur-lg border border-white/20">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">LMS</span>
        </h1>
        <p className="text-white/80 mb-8">Choose your portal to continue</p>

        <div className="flex flex-col gap-4">
          <Link
            to="/student-login"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
          >
            Student Login
          </Link>
          <Link
            to="/teacher-login"
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
          >
            Teacher Login
          </Link>
        </div>
      </div>

      <p className="mt-8 text-white/80 text-sm">
        Created by <span className="text-yellow-300 font-semibold">@RMP</span>
      </p>
    </div>
  );
}
