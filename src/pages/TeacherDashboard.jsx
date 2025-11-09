import React from "react";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      {/* Navigation Bar */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-white/20">
        <Link
          to="/"
          className="text-white font-semibold hover:text-yellow-300 transition"
        >
          Home
        </Link>
        <Link
          to="/add-course"
          className="text-white font-semibold hover:text-yellow-300 transition"
        >
          Add Courses
        </Link>
        <Link
          to="/view-assignments"
          className="text-white font-semibold hover:text-yellow-300 transition"
        >
          View Assignments
        </Link>
      </nav>

      {/* Dashboard Content */}
      <div className="bg-white/10 p-10 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20 w-[90%] max-w-xl mt-24">
        <h1 className="text-3xl font-bold mb-3">
          Welcome <span className="text-yellow-300">Praveen Kumar Sir</span>
        </h1>
        <p className="text-white/80 text-lg mb-8">
          Manage your courses and review student assignments here.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            to="/add-course"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
          >
            ➕ Add New Course
          </Link>
          <Link
            to="/view-assignments"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
          >
            📂 View Assignments
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-white/80 text-sm">
        Created by <span className="text-yellow-300 font-semibold">@RMP</span>
      </footer>
    </div>
  );
}
