import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="form-card">
        <h2>Welcome to Sikdar Getaways</h2>
        <p><i>"A refined gateway to premium travel experiences"</i></p>
        <p>Please login to continue</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            requiredlinkt
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? 
          {/* Use Link for internal navigation */}
          <Link to="/signup">Sign up</Link>  
        </p>
      </div>
    </div>
  );
}