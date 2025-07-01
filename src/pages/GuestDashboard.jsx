import React from "react";
import { Link } from "react-router-dom";

const GuestDashboard = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center px-4">
    <h1 className="text-4xl font-bold mb-4">Welcome to TaskFlow</h1>
    <p className="text-lg mb-6">
      Please log in to access your dashboard and manage tasks.
    </p>
    <Link
      to="/login"
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Go to Login
    </Link>
  </div>
);

export default GuestDashboard;
