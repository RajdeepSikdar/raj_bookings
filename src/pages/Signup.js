import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password && name) {
      navigate("/home");
    }
  };

  return (
    <div className="signup-page">
      <div className="form-card">
        <h2>Signup</h2>
        <p>Create a free account or <Link to="/">Login in</Link></p>
        <form onSubmit={handleSignup}>
        <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}