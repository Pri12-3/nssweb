import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password || !userType) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true); 

    try {
      const response = await fetch("./login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          userType,
        }),
      });

      const data = await response.json();
      setIsLoading(false); 

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setIsLoading(false); 
      setErrorMessage("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">HELLO!!</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="userType" className="form-label">
              Choose a User Type
            </label>
            <select
              id="userType"
              className="form-select"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-footer">
            <a
              href="#"
              className="forgot-link"
              onClick={handleForgotPassword}
            >
              Forgot password? Click here
            </a>
          </div>
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;