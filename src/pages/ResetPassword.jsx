import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/reset-password/${token}`, { password });
      alert("Password reset successful ✅");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Reset failed ❌");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Password 🔁
        </h2>

        <form onSubmit={handleReset}>
          <input
            type="password"
            placeholder="Enter new password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="auth-btn">
            Reset Password
          </button>
        </form>

        <button
          className="back-btn w-full"
          onClick={() => navigate("/forgot-password")}
        >
          ← Back to Forgot Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
