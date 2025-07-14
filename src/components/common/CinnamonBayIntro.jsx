import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import cinnamon1 from "../../assets/images/cinnamon1.jpg";
import infinityPool from "../../assets/images/infinityPool.jpg";

const CinnamonBayIntro = () => {
  return (
    <section className="my-5 px-3">
      <Container fluid>
        <Row className="align-items-start">
          {/* Left: Two images side by side with equal height */}
          <Col md={6}>
            <div className="d-flex gap-3">
              <div style={{ flex: 1 }}>
                <Image
                  src={cinnamon1}
                  alt="Cinnamon Bay View 1"
                  fluid
                  rounded
                  style={{
                    height: "550px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <Image
                  src={infinityPool}
                  alt="Cinnamon Bay View 2"
                  fluid
                  rounded
                  style={{
                    height: "550px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </Col>

          {/* Right: Clean, nicely aligned description */}
          <Col md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "100%",
                color: "gray",
                paddingLeft: "40px",
              }}
            >
              <h2 className="fw-bold hotel-color">Cinnamon Bay</h2>
              <h5 className="text-muted">Bentota, Sri Lanka</h5>
              <p className="mt-3" style={{ fontSize: "1.1rem", textAlign: "justify" }}>
                Nestled along the golden shores of Bentota, Cinnamon Bay offers a luxurious
                escape into serenity. Surrounded by swaying palms and turquoise waters, this
                tranquil haven merges tropical charm with warm Sri Lankan hospitality. Every
                detail—from artisan interiors to gourmet dining—invites you to unwind, explore,
                and reconnect.
              </p>
              <p style={{ fontSize: "1.1rem", textAlign: "justify" }}>
                Whether you're soaking in sunset views or discovering coastal wonders, Cinnamon Bay
                is a destination where every moment becomes a cherished memory. With personalized
                service, scenic beauty, and unforgettable experiences, each stay is designed to
                inspire peace and joy. From morning walks along the beach to candlelit dinners under
                the stars, Cinnamon Bay redefines what it means to truly relax and indulge.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CinnamonBayIntro;
