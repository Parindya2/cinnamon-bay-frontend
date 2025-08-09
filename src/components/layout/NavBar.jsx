import React, { useState } from "react"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { isAdmin } from "../utils/RoleUtils" 
import Logout from "../auth/Logout"

const NavBar = () => {
	const [showAccount, setShowAccount] = useState(false)
	const [showAdmin, setShowAdmin] = useState(false) 

	const navigate = useNavigate()

	const handleAccountClick = () => {
		setShowAccount(!showAccount)
	}

	const handleAdminClick = () => {
		setShowAdmin(!showAdmin) 
	}

	const handleProfileClick = () => {
		navigate("/profile")
	}

	const isLoggedIn = localStorage.getItem("token")

	const navStyle = {
		backgroundColor: "rgba(11, 9, 9, 0.9)",
		backdropFilter: "blur(5px)",
		color: "white",
		fontFamily: "'Poppins', sans-serif",
		fontSize: "16px",
	}

	const linkStyle = {
		color: "white",
		fontSize: "16px",
		textDecoration: "none",
		fontFamily: "'Poppins', sans-serif",
	}

	const logoStyle = {
		color: "rgb(169, 77, 123)",
		fontFamily: "'Dancing Script', cursive",
		fontWeight: "bold",
		fontSize: "25px",
		textTransform: "capitalize",
		fontStyle: "italic",
	}

	return (
		<nav className="navbar navbar-expand-lg px-5 shadow sticky-top" style={navStyle}>
			<div className="container-fluid">
				<Link to="/" className="navbar-brand" style={logoStyle}>
					CinnamonBay 
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarScroll">
					<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
						<li className="nav-item">
							<NavLink className="nav-link" to="/browse-all-rooms" style={linkStyle}>
								Browse all rooms
							</NavLink>
						</li>

						{/* Show admin dropdown only for admin users */}
						{isLoggedIn && isAdmin() && (
							<li className="nav-item dropdown">
								<a
									className={`nav-link dropdown-toggle ${showAdmin ? "show" : ""}`}
									href="#"
									role="button"
									onClick={handleAdminClick}
									style={linkStyle}>
									Admin
								</a>
								<ul className={`dropdown-menu ${showAdmin ? "show" : ""}`}>
									<li><Link className="dropdown-item" to="/add-room">Add Room</Link></li>
									<li><Link className="dropdown-item" to="/existing-rooms">Manage Rooms</Link></li>
									<li><Link className="dropdown-item" to="/existing-bookings">Manage Bookings</Link></li>
								</ul>
							</li>
						)}
					</ul>

					<ul className="d-flex navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to="/find-booking" style={linkStyle}>
								Find my booking
							</NavLink>
						</li>

						<li className="nav-item dropdown">
							<a
								className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
								href="#"
								role="button"
								onClick={handleAccountClick}
								style={linkStyle}>
								Account
							</a>

							<ul className={`dropdown-menu ${showAccount ? "show" : ""}`}>
								{isLoggedIn ? (
									<>
										<li>
											<button className="dropdown-item" onClick={handleProfileClick}>
												Profile
											</button>
										</li>
										<li><Logout /></li>
									</>
								) : (
									<>
										<li>
											<Link className="dropdown-item" to="/register">
												Register
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/login">
												Login
											</Link>
										</li>
									</>
								)}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar