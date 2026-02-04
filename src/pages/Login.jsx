import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", { email, password });

      alert("Login Successful ✅");
      console.log("LOGIN RESPONSE:", res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="text-2xl font-bold text-center mb-2">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin}>
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

          <button className="auth-btn">Login</button>
        </form>

        <button
          onClick={() => navigate("/forgot-password")}
          className="back-btn w-full"
        >
          Forgot Password?
        </button>

        <button
          onClick={() => navigate("/register")}
          className="back-btn w-full"
        >
          ← Create New Account
        </button>
      </div>
    </div>
  );
};

export default Login;
