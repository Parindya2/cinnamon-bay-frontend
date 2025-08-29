import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomerReviews = () => {
  const reviews = [
    { id: 1, name: "Sarah Johnson", rating: 5, review: "Absolutely wonderful stay!", date: "2024-08-15", avatar: "SJ" },
    { id: 2, name: "Michael Chen", rating: 5, review: "Best hotel experience I've ever had.", date: "2024-08-10", avatar: "MC" },
    { id: 3, name: "Emily Rodriguez", rating: 4, review: "Beautiful hotel with stunning views.", date: "2024-08-05", avatar: "ER" },
  ];

  const renderStars = (rating) => {
    return (
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>
    );
  };

  return (
    <section>
      <div>
        <div>
          <p>TESTIMONIALS</p>
          <h2>What our Guests Say</h2>
          <p>
            Discover why our guests choose us again and again. Read authentic reviews.
          </p>
        </div>

        <div>
          {reviews.map((review) => (
            <div key={review.id}>
              {/* Avatar and Name */}
              <div>
                <div>{review.avatar}</div>
                <h3>{review.name}</h3>
              </div>

              {/* Rating */}
              <div>{renderStars(review.rating)}</div>

              {/* Review Text */}
              <p>{review.review}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div>
          <button><FaChevronLeft className='w-6 h-6'/></button>
          <button><FaChevronRight className='w-6 h-6'/></button>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews;
