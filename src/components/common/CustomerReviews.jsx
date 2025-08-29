import React from 'react'
import { FaChevronLeft } from 'react-icons/fa';

const CustomerReviews = () => {
    const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely wonderful stay! The service was exceptional and the rooms were spotless. The staff went above and beyond to make our anniversary special. Highly recommend this hotel for anyone looking for luxury and comfort.",
      date: "2024-08-15",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      review: "Best hotel experience I've ever had. The location is perfect, amenities are top-notch, and the breakfast was incredible. The concierge team helped us plan the perfect itinerary for our city tour.",
      date: "2024-08-10",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      review: "Beautiful hotel with stunning views. The spa services were relaxing and the restaurant food was delicious. Only minor issue was the WiFi speed, but overall a fantastic experience.",
      date: "2024-08-05",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      review: "Exceeded all expectations! The room was spacious and elegantly decorated. The hotel's attention to detail is remarkable. Will definitely be staying here again on our next visit.",
      date: "2024-07-28",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      review: "Perfect location and amazing service. The hotel staff made us feel like royalty. The rooftop bar has the best cocktails in the city. Can't wait to return!",
      date: "2024-07-20",
      avatar: "LP"
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 4,
      review: "Great hotel with excellent facilities. The gym and pool area were well-maintained. Room service was prompt and the food quality was outstanding. Highly recommended for business travelers.",
      date: "2024-07-15",
      avatar: "JW"
    }
  ];

  return (
    <section>
        <div>
            <div>
                <p>TESTIMONIALS</p>
                <h2>What our Guests Say</h2>
                <p>
                    Discover why our guests choose us again and again. Read authentic reviews from travelers 
                    who have experienced our hospitality and luxury accommodations.
                </p>
            </div>

            <div>
                {currentReviews.map((review) => (
                    <div
                       key={review.id}
                    >
                        {/* Avatar and Name */}
                        <div>
                            <div>{review.avatar}</div>
                            <h3>{review.name}</h3>
                        </div>

                        {/*Rating */}
                        <div>
                            {renderStars(review.rating)}
                        </div>

                        {/* Review Text */}
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div>
                <button>
                    <FaChevronLeft className='w-6 h-6'/>
                </button>
                <button>
                    <FaChevronRight className='w-6 h-6'/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default CustomerReviews;
