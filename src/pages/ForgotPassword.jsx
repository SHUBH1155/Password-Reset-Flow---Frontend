import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      await API.post("/forgot-password", { email });
      alert("Reset link sent to your email 📧");
    } catch (err) {
      alert(err.response?.data?.message || "Error sending email");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="text-2xl font-bold text-center mb-2">
          Forgot Password 🔐
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Enter your registered email
        </p>

        <form onSubmit={handleForgot}>
          <input
            type="email"
            placeholder="Email address"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="auth-btn">
            Send Reset Link
          </button>
        </form>

        <button
          className="back-btn w-full"
          onClick={() => navigate("/login")}
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
