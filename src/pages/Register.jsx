import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/register", { name, email, password });
      alert("Registration Successful ✅");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed ❌");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="text-2xl font-bold text-center mb-2">
          Create Account 🚀
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Join us and get started
        </p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            className="auth-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="auth-btn">
            Register
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          className="back-btn w-full"
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
};

export default Register;
