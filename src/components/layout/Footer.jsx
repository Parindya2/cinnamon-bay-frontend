import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const CinnamonBayFooter = () => {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", padding: "50px 0" }}>
      <Container>
        <Row>
          {/* Left: Logo & Social */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h3 className="fw-bold" style={{ fontFamily: "serif" }}>CINNAMON BAY</h3>
            <p className="fst-italic">A Luxury Retreat</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <FaInstagram size={20} />
              <FaFacebookF size={20} />
              <FaTiktok size={20} />
            </div>
          </Col>

          {/* Middle: Navigation */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h5 className="fw-bold">Explore</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Accommodation</li>
              <li>Dining</li>
              <li>Experiences</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </Col>

          {/* Right: Contact */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold">Cinnamon Bay Hotel</h5>
            <p>Coastal Road, Bentota, Sri Lanka</p>
            <hr style={{ borderColor: "#444" }} />
            <div className="d-flex align-items-center gap-2">
              <FaPhoneAlt style={{ color: "#00d4ff" }} />
              <span>+94 77 123 4567</span>
            </div>
            <hr style={{ borderColor: "#444" }} />
            <div className="d-flex align-items-center gap-2">
              <FaEnvelope style={{ color: "#00d4ff" }} />
              <div>
                <div>reservations@cinnamonbay.lk</div>
                <div>info@cinnamonbay.lk</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CinnamonBayFooter;
