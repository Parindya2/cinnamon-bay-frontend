import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "./Header"
import {
	FaClock,
	FaCocktail,
	FaParking,
	FaSnowflake,
	FaTshirt,
	FaUtensils,
	FaWifi
} from "react-icons/fa"

const HotelService = () => {
	return (
		<>
  <Container fluid className="my-5 px-3 px-md-3">

    <Card className="shadow-sm p-4 rounded-4">
      <div>
        <h2
          className="heading-black"
          style={{
            fontFamily: "'Noto Sans', sans-serif",
            textAlign: "center"
          }}
        >
          Our Facilities
        </h2>

        <Row className="mt-4">
          <h4 className="text-center">
            Services at <span className="hotel-color">Cinnamon Bay - </span>Hotel
            <span className="gap-2">
              <FaClock className="ms-3" /> 24-Hour Front Desk
            </span>
          </h4>
        </Row>

        <hr className="mb-4 mt-3" />

        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaWifi /> WiFi
                </Card.Title>
                <Card.Text>Stay connected with high-speed internet access.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaUtensils /> Breakfast
                </Card.Title>
                <Card.Text>Start your day with a delicious breakfast buffet.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaTshirt /> Laundry
                </Card.Title>
                <Card.Text>Keep your clothes clean and fresh with our laundry service.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaCocktail /> Mini-bar
                </Card.Title>
                <Card.Text>Enjoy a refreshing drink or snack from our  mini-bar.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaParking /> Parking
                </Card.Title>
                <Card.Text>Park your car conveniently in our on-site parking lot.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaSnowflake /> Air conditioning
                </Card.Title>
                <Card.Text>Stay cool and comfortable with our air conditioning system.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Card>
  </Container>
</>

	)
}

export default HotelService