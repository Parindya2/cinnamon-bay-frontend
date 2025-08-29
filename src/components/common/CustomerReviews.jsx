import React from "react";
import { Carousel, Card, Container } from "react-bootstrap";

const testimonials = [
  {
    text: "Exceptional service and beautiful accommodations! The staff at Cinnamon Bay made my stay unforgettable. The ocean view from my room was breathtaking.",
    author: "Parindya Mullegama",
  },
  {
    text: "The hospitality was amazing! Everything was well organized and the food was delicious. Highly recommend this place for anyone visiting.",
    author: "John Doe",
  },
  {
    text: "A peaceful and relaxing stay. The staff went above and beyond to make sure we were comfortable throughout our vacation.",
    author: "Jane Smith",
  },
  {
    text: "The location is perfect and the service exceeded all my expectations. Definitely coming back next year!",
    author: "Michael Lee",
  },
];

const CustomerReviews = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <h6 className="text-uppercase text-muted">Testimonials</h6>
        <h2
          className="heading-black"
          style={{
            fontFamily: "'Noto Sans', sans-serif",
            textAlign: "center"
          }}
        >What Our Guests Say</h2>
      </div>

      <Carousel indicators={true}>
        {/* First slide */}
        <Carousel.Item>
          <div className="d-flex justify-content-center gap-5">
            {testimonials.slice(0, 3).map((review, idx) => (
              <Card key={idx} className="p-3 shadow-sm" style={{ width: "18rem", backgroundColor: "#a24c74", color: "white", borderRadius: "12px" }}>
                <Card.Body>
                  <Card.Text>{review.text}</Card.Text>
                  <p className="mt-3 fw-bold fst-italic text-center">{review.author}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>

        {/* Second slide */}
        <Carousel.Item>
          <div className="d-flex justify-content-center gap-5">
            {testimonials.slice(1, 4).map((review, idx) => (
              <Card key={idx} className="p-3 shadow-sm" style={{ width: "18rem", backgroundColor: "#a24c74", color: "white", borderRadius: "12px" }}>
                <Card.Body>
                  <Card.Text>{review.text}</Card.Text>
                  <p className="mt-3 fw-bold fst-italic text-center">{review.author}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="card p-4 shadow-sm mt-5">
         <h5 className="mb-3">How was your stay with us?</h5>
         <p className="text-muted mb-4">We’d love to hear about your experience.</p>
  
  
       {/* Review text */}
       <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Write your review here..."></textarea>
       </div>
  
       {/* Submit */}
      <button className="btn btn-primary">Submit Review</button>
     </div>

    </Container>
  );
};

export default CustomerReviews;
