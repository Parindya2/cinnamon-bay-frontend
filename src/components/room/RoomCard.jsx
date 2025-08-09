import React, { useContext } from "react"
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const RoomCard = ({ room }) => {
	return (
		<Col key={room.id} className="mb-4" xs={12}>
			<Card className="p-2 shadow-sm" style={{ fontSize: "1rem" }}>
				<Card.Body className="d-flex flex-wrap align-items-center">
					<div className="flex-shrink-0">


						<Link to={`/book-room/${room.id}`} >
							
						
							<Card.Img
								variant="top"
								src={`data:image/png;base64, ${room.photo}`}
								alt="Room Photo"
								style={{ width: "100%", maxWidth: "250px", height: "auto" }}
							/>
						</Link>
					</div>
					<div className="flex-grow-1 ms-3 px-3">
						<Card.Title className="hotel-color">{room.roomType}</Card.Title>
						<Card.Title className="room-price">$ {room.roomPrice}</Card.Title>
						<Card.Text>Some room information goes here for the guest to read through</Card.Text>
					</div>
					<div className="flex-shrink-0 mt-3">
						<Link to={`/book-room/${room.id}`} className="btn btn-hotel btn-sm" style={{ 
							    backgroundColor: "#000",
								color: "#fff", 
								border: "none", 
								borderRadius: "50px",
								marginRight: "25px",
								padding: "10px 15px", 
								}}>
							Book Now
						</Link>
					</div>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default RoomCard