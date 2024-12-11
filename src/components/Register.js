import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Register.css"; // Import the CSS file for styling

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Add navigation to another page after sign-in
    navigate('/'); // Navigate to the home page or the desired route
  };

  return (
    <div className="register-container">
      <div className="image-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLzhQsuDgus3FEcLO6tN1VGIqSHEsIW2wPCSJ7VnyvEN3JE60"
          alt="House"
          className="image"
        />
      </div>
      <div className="form-section">
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <a href="/forgot-password" className="forgot-password">
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default Register;
