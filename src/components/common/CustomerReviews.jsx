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

      <div className="flex flex-col items-start gap-2 w-full max-w-md mx-auto mt-8">
      <div>
        <h5 className="text-lg font-semibold">How was your stay with us?</h5>
        <p className="text-gray-600 text-sm">We'd love to hear about your experience.</p>
      </div>

  <div className="flex w-full gap-3">
    {/* Input box */}
    <input
      type="text"
      placeholder="Write your review here..."
      className="flex-1 p-3 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white placeholder-gray-400 focus:outline-none"
    />

    {/* Submit button */}
    <button className="px-6 py-3 rounded-xl bg-[#a24c74] text-white font-semibold hover:bg-[#8c3f63] transition-colors">
      Submit
    </button>
  </div>
</div>


    </Container>
  );
};

export default CustomerReviews;
