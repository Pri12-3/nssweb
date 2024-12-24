import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forgot-password.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("./forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        alert("Password reset link sent to your email!");
        navigate("/login");
      } else {
        setErrorMessage(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error during password reset:", error);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h1 className="forgot-password-title">Forgot Password</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handlePasswordReset}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Enter your email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="reset-button" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <div className="form-footer">
          <a href="/login" className="back-to-login">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;