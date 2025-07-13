import React, { useState } from "react";
import { registration as registerUser } from "../utils/ApiFunctions";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Registration = () => {
  const [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(registration);
      setSuccessMessage(result);
      setErrorMessage("");
      setRegistration({ firstName: "", lastName: "", email: "", password: "" });
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage(`Registration error : ${error.message}`);
    }
    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div className="mt-1 mb-1"
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left: Form Panel */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 50px",
        }}
      >
        <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Register</h2>

        {errorMessage && (
          <p className="alert alert-danger" style={{ width: "100%" }}>
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="alert alert-success" style={{ width: "100%" }}>
            {successMessage}
          </p>
        )}

        <form onSubmit={handleRegistration}>
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
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              className="form-control border-0 bg-transparent"
              value={registration.firstName}
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
              marginBottom: "20px",
              padding: "10px",
            }}
          >
            <FaUser style={{ marginRight: "10px" }} />
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="form-control border-0 bg-transparent"
              value={registration.lastName}
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
              marginBottom: "20px",
              padding: "10px",
            }}
          >
            <FaEnvelope style={{ marginRight: "10px" }} />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="form-control border-0 bg-transparent"
              value={registration.email}
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
              marginBottom: "20px",
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
              value={registration.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100"
            style={{ backgroundColor: "#000", color: "#fff", borderRadius: "25px", fontWeight: "bold" }}
          >
            Register
          </button>

          <p className="mt-3 text-center" style={{ fontSize: "0.9rem" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>

      {/* Right: Black Panel */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: "150px",
          borderBottomLeftRadius: "150px",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>Welcome to Cinnamon Bay!</h2>
        <p>Already registered?</p>
        <Link to="/login">
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              padding: "10px 20px",
              borderRadius: "25px",
              fontWeight: "bold",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
