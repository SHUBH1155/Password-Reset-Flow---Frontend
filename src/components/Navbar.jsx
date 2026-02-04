import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-green-500 to-yellow-400 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          🔐 Auth System
        </h1>

        {/* ❌ Login & Register buttons removed */}
      </div>
    </div>
  );
};

export default Navbar;

