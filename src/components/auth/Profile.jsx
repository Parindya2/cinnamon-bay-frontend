import React, { useEffect, useState } from "react"
import { deleteUser, getBookingsByUserId, getUser } from "../utils/ApiFunctions"
import { useNavigate } from "react-router-dom"
import moment from "moment"

const Profile = () => {
	const [user, setUser] = useState({
		id: "",
		email: "",
		firstName: "",
		lastName: "",
		roles: [{ id: "", name: "" }]
	})

	const [bookings, setBookings] = useState([
		{
			id: "",
			room: { id: "", roomType: "" },
			checkInDate: "",
			checkOutDate: "",
			bookingConfirmationCode: ""
		}
	])
	const [message, setMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const navigate = useNavigate()

	const userId = localStorage.getItem("userId")
	const token = localStorage.getItem("token")

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await getUser(userId, token)
				setUser(userData)
			} catch (error) {
				console.error(error)
			}
		}

		fetchUser()
	}, [userId])

	useEffect(() => {
		const fetchBookings = async () => {
			try {
				const response = await getBookingsByUserId(userId, token)
				setBookings(response)
			} catch (error) {
				console.error("Error fetching bookings:", error.message)
				setErrorMessage(error.message)
			}
		}

		fetchBookings()
	}, [userId])

	const handleDeleteAccount = async () => {
		const confirmed = window.confirm(
			"Are you sure you want to delete your account? This action cannot be undone."
		)
		if (confirmed) {
			await deleteUser(userId)
				.then((response) => {
					setMessage(response.data)
					localStorage.removeItem("token")
					localStorage.removeItem("userId")
					localStorage.removeItem("userRole")
					navigate("/")
					window.location.reload()
				})
				.catch((error) => {
					setErrorMessage(error.data)
				})
		}
	}

	return (
	<div className="container mt-5 mb-5">
		{errorMessage && <p className="text-danger">{errorMessage}</p>}
		{message && <p className="text-success">{message}</p>}

		{user ? (
			<div className="p-4 rounded" style={{ backgroundColor: "#1f1f1f", color: "#fff", boxShadow: "0 0 25px rgba(0,0,0,0.4)" }}>
				<h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>👤 User Profile</h3>

				{/* Profile Info */}
				<div className="card mb-5" 
				   style={{ 
					  backgroundColor: "#2c2c2c", 
					  border: "none", 
					  borderRadius: "15px", 
					  padding: "1.5rem" ,
					  color: "#fff"
					}}>
					<div className="row">
						<div className="col-md-2 d-flex justify-content-center align-items-center">
							<img
								src="https://themindfulaimanifesto.org/wp-content/uploads/2020/09/male-placeholder-image.jpeg"
								alt="Profile"
								className="rounded-circle shadow"
								style={{ width: "130px", height: "130px", objectFit: "cover" }}
							/>
						</div>

						<div className="col-md-10">
							<div className="row mb-3">
								<label className="col-sm-3 fw-bold">User ID:</label>
								<div className="col-sm-9">{user.id}</div>
							</div>
							<hr style={{ backgroundColor: "#444" }} />

							<div className="row mb-3">
								<label className="col-sm-3 fw-bold" style={{ color: "#fff" }}>First Name:</label>
								<div className="col-sm-9">{user.firstName}</div>
							</div>
							<hr style={{ backgroundColor: "#444" }} />

							<div className="row mb-3">
								<label className="col-sm-3 fw-bold">Last Name:</label>
								<div className="col-sm-9">{user.lastName}</div>
							</div>
							<hr style={{ backgroundColor: "#444" }} />

							<div className="row mb-3">
								<label className="col-sm-3 fw-bold">Email:</label>
								<div className="col-sm-9">{user.email}</div>
							</div>
							<hr style={{ backgroundColor: "#444" }} />

							<div className="row mb-3">
								<label className="col-sm-3 fw-bold">Roles:</label>
								<div className="col-sm-9">
									<ul className="list-unstyled mb-0">
										{user.roles.map((role) => (
											<li key={role.id}>{role.name}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Booking History */}
				<div className="mt-5">
					<h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>🛎️ Booking History</h3>

					{bookings.length > 0 ? (
						<div className="table-responsive">
							<table className="table table-dark table-hover table-bordered rounded shadow-sm">
								<thead className="table-secondary text-dark">
									<tr>
										<th>Booking ID</th>
										<th>Room ID</th>
										<th>Room Type</th>
										<th>Check-In</th>
										<th>Check-Out</th>
										<th>Confirmation</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									{bookings.map((booking, index) => (
										<tr key={index}>
											<td>{booking.id}</td>
											<td>{booking.room.id}</td>
											<td>{booking.room.roomType}</td>
											<td>{moment(booking.checkInDate).subtract(1, "month").format("MMM Do, YYYY")}</td>
											<td>{moment(booking.checkOutDate).subtract(1, "month").format("MMM Do, YYYY")}</td>
											<td>{booking.bookingConfirmationCode}</td>
											<td className="text-success">On-going</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<p className="text-muted text-center">You have not made any bookings yet.</p>
					)}
				</div>

				{/* Delete Button */}
				<div className="text-center mt-4">
					<button className="btn btn-outline-danger btn-sm px-4 py-2" onClick={handleDeleteAccount}>
						🗑️ Close My Account
					</button>
				</div>
			</div>
		) : (
			<p className="text-light">Loading user data...</p>
		)}
	</div>
)

}

export default Profile