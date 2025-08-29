import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely wonderful stay! The service was exceptional and the rooms were spotless. The staff went above and beyond to make our anniversary special.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      review: "Best hotel experience I've ever had. The location is perfect, amenities are top-notch, and the breakfast was incredible.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      review: "Beautiful hotel with stunning views. The spa services were relaxing and the restaurant food was delicious.",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      review: "Exceeded all expectations! The room was spacious and elegantly decorated. Will definitely be staying here again.",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      review: "Perfect location and amazing service. The hotel staff made us feel like royalty. The rooftop bar has the best cocktails in the city.",
      avatar: "LP"
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 4,
      review: "Great hotel with excellent facilities. The gym and pool area were well-maintained. Room service was prompt and the food quality was outstanding.",
      avatar: "JW"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextReviews = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };

  const prevReviews = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage, 
    (currentPage * reviewsPerPage) + reviewsPerPage
  );

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider mb-2" style={{ color: 'rgb(169, 77, 123)' }}>
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Guests Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-6">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                  style={{ backgroundColor: 'rgb(169, 77, 123)' }}
                >
                  {review.avatar}
                </div>
                <h3 className="font-semibold text-black text-lg">
                  {review.name}
                </h3>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevReviews}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 text-white hover:scale-110"
            style={{ backgroundColor: 'rgb(169, 77, 123)' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextReviews}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 text-white hover:scale-110"
            style={{ backgroundColor: 'rgb(169, 77, 123)' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;