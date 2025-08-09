import React, { useState } from "react";
import { login as loginUser } from "../utils/ApiFunctions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectUrl = location.state?.path || "/";

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Starting login with:', login); // Debug log
  
  try {
    const success = await loginUser(login);
    console.log('Login response received:', success); // Debug log
    console.log('Success type:', typeof success); // Debug log
    console.log('Success truthiness:', !!success); // Debug log
    
    if (success) {
      console.log('Login successful, token:', success.token); // Debug log
      const token = success.token;
      auth.handleLogin(token);
      navigate(redirectUrl, { replace: true });
    } else {
      console.log('Login failed - success is falsy'); // Debug log
      setErrorMessage("Invalid username or password. Please try again.");
    }
  } catch (error) {
    console.error('Login error caught:', error); // Debug log
    setErrorMessage("An error occurred during login. Please try again.");
  }
  
  setTimeout(() => {
    setErrorMessage("");
  }, 4000);
};

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Panel */}
      <div className="mb-1 mt-1"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: "150px",
          borderBottomRightRadius: "150px",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>Hello, Welcome!</h2>
        <p>Don't have an account?</p>
        <Link to="/register">
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              padding: "10px 20px",
              borderRadius: "25px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Register
          </button>
        </Link>
      </div>

      {/* Right Panel - Login Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 50px",
        }}
      >
        <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>Login</h2>

        {errorMessage && (
          <p className="alert alert-danger" style={{ width: "100%" }}>
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderRadius: "5px",
              marginBottom: "20px",
              padding: "10px",
            }}
          >
            <FaUser style={{ marginRight: "10px" }} />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Username"
              className="form-control border-0 bg-transparent"
              style={{ outline: "none", boxShadow: "none", backgroundColor: "transparent" }}
              value={login.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderRadius: "5px",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <FaLock style={{ marginRight: "10px" }} />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="form-control border-0 bg-transparent"
              style={{ outline: "none", boxShadow: "none", backgroundColor: "transparent" }}
              value={login.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3 text-end">
            <Link to="/forgot-password" style={{ fontSize: "0.9rem" }}>
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100"
            style={{ backgroundColor: "#000", 
                     color: "#fff", 
                     borderRadius: "25px", 
                     fontWeight: "bold",
                     paddingTop: "10px",
                     paddingBottom: "10px" }}
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p style={{ fontSize: "0.9rem" }}>or login with social platforms</p>
          <div className="d-flex justify-content-center gap-3">
            <FaGoogle size={22} />
            <FaFacebookF size={22} />
            <FaGithub size={22} />
            <FaLinkedin size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
