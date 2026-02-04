import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile");
        console.log("PROFILE:", res.data);

        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (err) {
        console.log("Profile error:", err);
        handleLogout();
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="text-2xl font-bold text-center mb-2">
          Dashboard 🏠
        </h2>

        <p className="text-center text-gray-500 mb-4">
          Welcome to your secure dashboard
        </p>

        <div className="border rounded-lg p-4 mb-4 bg-gray-50">
          <p className="text-sm text-gray-600">Logged in as:</p>
          <p className="font-semibold text-lg">
            {user?.name || "User"}
          </p>
          <p className="text-sm text-gray-500">
            {user?.email || ""}
          </p>
        </div>

        <div className="space-y-2">
          <button className="auth-btn">
            🔐 Change Password
          </button>

          <button className="auth-btn">
            📄 View Profile
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="back-btn w-full mt-4"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
