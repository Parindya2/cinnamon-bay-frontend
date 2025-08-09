import React, { useEffect, useState } from "react"
import moment from "moment"
import { Form, FormControl } from "react-bootstrap"
import BookingSummary from "./BookingSummary"
import { bookRoom, getRoomById } from "../utils/ApiFunctions"
import { useNavigate, useParams } from "react-router-dom"

const BookingForm = () => {
	const [validated, setValidated] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	const [roomPrice, setRoomPrice] = useState(0)

	const currentUser = localStorage.getItem("userId")

	const [booking, setBooking] = useState({
		guestFullName: "",
		guestEmail: currentUser,
		checkInDate: "",
		checkOutDate: "",
		numOfAdults: "",
		numOfChildren: ""
	})

	const [roomInfo, setRoomInfo] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	})

	const { roomId } = useParams()
	const navigate = useNavigate()

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setBooking({ ...booking, [name]: value })
		setErrorMessage("")
	}

	const getRoomPriceById = async (roomId) => {
		try {
			const response = await getRoomById(roomId)
			setRoomPrice(response.roomPrice)
		} catch (error) {
			throw new Error(error)
		}
	}

	useEffect(() => {
		getRoomPriceById(roomId)
	}, [roomId])

	const calculatePayment = () => {
		const checkInDate = moment(booking.checkInDate)
		const checkOutDate = moment(booking.checkOutDate)
		const diffInDays = checkOutDate.diff(checkInDate, "days")
		const price = roomPrice ? roomPrice : 0
		return diffInDays * price
	}

	const isGuestCountValid = () => {
		const adultCount = parseInt(booking.numOfAdults)
		const childrenCount = parseInt(booking.numOfChildren)
		const totalCount = adultCount + childrenCount
		return totalCount >= 1 && adultCount >= 1
	}

	const isCheckOutDateValid = () => {
		if (!moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))) {
			setErrorMessage("Check-out date must be after check-in date")
			return false
		} else {
			setErrorMessage("")
			return true
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.currentTarget
		if (form.checkValidity() === false || !isGuestCountValid() || !isCheckOutDateValid()) {
			e.stopPropagation()
		} else {
			setIsSubmitted(true)
		}
		setValidated(true)
	}

	const handleFormSubmit = async () => {
		try {
			const confirmationCode = await bookRoom(roomId, booking)
			setIsSubmitted(true)
			navigate("/booking-success", { state: { message: confirmationCode } })
		} catch (error) {
			const errorMessage = error.message
			console.log(errorMessage)
			navigate("/booking-success", { state: { error: errorMessage } })
		}
	}

	// Styles
	const styles = {
	card: {
		backgroundColor: "rgba(0, 0, 0, 0.9)",
		color: "white",
		padding: "2rem",
		borderRadius: "20px",
		boxShadow: "0 0 25px rgba(0,0,0,0.5)"
	},
	input: {
		backgroundColor: "#1f1f1f",
		color: "#fff",
		border: "1px solid #444",
		borderRadius: "10px",
		padding: "10px",
		marginTop: "5px",
		marginBottom: "10px",
		width: "100%",
		// Fix white icon for date/email inputs
		
		WebkitAppearance: "none"
	},
	button: {
		backgroundColor: "rgb(169, 77, 123)" ,
		border: "none",
		padding: "12px 20px",
		color: "#fff",
		borderRadius: "30px",
		fontWeight: "bold",
		width: "100%",
		transition: "0.3s ease"
	},
	fieldset: {
		border: "1px solid #444",
		padding: "1rem",
		borderRadius: "10px",
		marginTop: "1rem",
		color: "#fff"
	},
	legend: {
		fontSize: "1.1rem",
		color: "#fff",
		padding: "0 10px"
	},
	heading: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: "1.6rem",
		marginBottom: "20px"
	
}

	}

	return (
		<>
			<div className="container mb-5">
				<div className="row">
					<div className="col-md-6">
						<div className="card card-body mt-5" style={styles.card}>
							<h4>Reserve Room</h4>

							<Form noValidate validated={validated} onSubmit={handleSubmit}>
								<Form.Group>
									<Form.Label htmlFor="guestFullName">Fullname</Form.Label>
									<FormControl
										required
										type="text"
										id="guestFullName"
										name="guestFullName"
										value={booking.guestFullName}
										placeholder="Enter your fullname"
										onChange={handleInputChange}
										style={styles.input}
									/>
									<Form.Control.Feedback type="invalid">
										Please enter your fullname.
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group>
									<Form.Label htmlFor="guestEmail">Email</Form.Label>
									<FormControl
										required
										type="email"
										id="guestEmail"
										name="guestEmail"
										value={booking.guestEmail}
										placeholder="Enter your email"
										onChange={handleInputChange}
										style={styles.input}
									/>
									<Form.Control.Feedback type="invalid">
										Please enter a valid email address.
									</Form.Control.Feedback>
								</Form.Group>

								<fieldset style={styles.fieldset}>
									<legend style={styles.legend}>Lodging Period</legend>
									<div className="row">
										<div className="col-6">
											<Form.Label htmlFor="checkInDate">Check-in date</Form.Label>
											<FormControl
												required
												type="date"
												id="checkInDate"
												name="checkInDate"
												value={booking.checkInDate}
												min={moment().format("YYYY-MM-DD")}
												onChange={handleInputChange}
												style={styles.input}
											/>
											<Form.Control.Feedback type="invalid">
												Please select a check in date.
											</Form.Control.Feedback>
										</div>

										<div className="col-6">
											<Form.Label htmlFor="checkOutDate">Check-out date</Form.Label>
											<FormControl
												required
												type="date"
												id="checkOutDate"
												name="checkOutDate"
												value={booking.checkOutDate}
												min={moment().format("YYYY-MM-DD")}
												onChange={handleInputChange}
												style={styles.input}
											/>
											<Form.Control.Feedback type="invalid">
												Please select a check out date.
											</Form.Control.Feedback>
										</div>
										{errorMessage && <p className="text-danger">{errorMessage}</p>}
									</div>
								</fieldset>

								<fieldset style={styles.fieldset}>
									<legend style={styles.legend}>Number of Guests</legend>
									<div className="row">
										<div className="col-6">
											<Form.Label htmlFor="numOfAdults">Adults</Form.Label>
											<FormControl
												required
												type="number"
												id="numOfAdults"
												name="numOfAdults"
												value={booking.numOfAdults}
												min={1}
												placeholder="0"
												onChange={handleInputChange}
												style={styles.input}
											/>
											<Form.Control.Feedback type="invalid">
												Please select at least 1 adult.
											</Form.Control.Feedback>
										</div>
										<div className="col-6">
											<Form.Label htmlFor="numOfChildren">Children</Form.Label>
											<FormControl
												required
												type="number"
												id="numOfChildren"
												name="numOfChildren"
												value={booking.numOfChildren}
												placeholder="0"
												min={0}
												onChange={handleInputChange}
												style={styles.input}
											/>
											<Form.Control.Feedback type="invalid">
												Select 0 if no children.
											</Form.Control.Feedback>
										</div>
									</div>
								</fieldset>

								<div className="form-group mt-3">
									<button
										type="submit"
										style={styles.button}
										onMouseOver={(e) => (e.target.style.backgroundColor = "#a37849")}
										onMouseOut={(e) => (e.target.style.backgroundColor = "#c49b66")}
									>
										Continue
									</button>
								</div>
							</Form>
						</div>
					</div>

					<div className="col-md-4">
						{isSubmitted && (
							<BookingSummary
								booking={booking}
								payment={calculatePayment()}
								onConfirm={handleFormSubmit}
								isFormValid={validated}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default BookingForm
