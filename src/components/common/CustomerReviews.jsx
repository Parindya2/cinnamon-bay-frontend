import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely wonderful stay! The service was exceptional and the rooms were spotless.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      review: "Best hotel experience I've ever had. The location is perfect and amenities are top-notch.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      review: "Beautiful hotel with stunning views. The spa services were relaxing and food was delicious.",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      review: "Exceeded all expectations! The room was spacious and elegantly decorated.",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      review: "Perfect location and amazing service. The hotel staff made us feel like royalty.",
      avatar: "LP"
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 4,
      review: "Great hotel with excellent facilities. Room service was prompt and food quality outstanding.",
      avatar: "JW"
    }
  ];

  const [page, setPage] = useState(0);

  const showNext = () => {
    if (page < 1) setPage(page + 1);
    else setPage(0);
  };

  const showPrev = () => {
    if (page > 0) setPage(page - 1);
    else setPage(1);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider mb-2" style={{ color: 'rgb(169, 77, 123)' }}>
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {page === 0 ? (
            <>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                    style={{ backgroundColor: 'rgb(169, 77, 123)' }}
                  >
                    SJ
                  </div>
                  <h3 className="font-semibold text-black text-lg">Sarah Johnson</h3>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Absolutely wonderful stay! The service was exceptional and the rooms were spotless."
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                    style={{ backgroundColor: 'rgb(169, 77, 123)' }}
                  >
                    MC
                  </div>
                  <h3 className="font-semibold text-black text-lg">Michael Chen</h3>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Best hotel experience I've ever had. The location is perfect and amenities are top-notch."
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                    style={{ backgroundColor: 'rgb(169, 77, 123)' }}
                  >
                    ER
                  </div>
                  <h3 className="font-semibold text-black text-lg">Emily Rodriguez</h3>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Beautiful hotel with stunning views. The spa services were relaxing and food was delicious."
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                    style={{ backgroundColor: 'rgb(169, 77, 123)' }}
                  >
                    DT
                  </div>
                  <h3 className="font-semibold text-black text-lg">David Thompson</h3>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Exceeded all expectations! The room was spacious and elegantly decorated."
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                    style={{ backgroundColor: 'rgb(169, 77, 123)' }}
                  >
                    LP
                  </div>
                  <h3 className="font-semibold text-black text-lg">Lisa Park</h3>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Perfect location and amazing service. The hotel staff made us feel like royalty."
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                    style={{ backgroundColor: 'rgb(169, 77, 123)' }}
                  >
                    JW
                  </div>
                  <h3 className="font-semibold text-black text-lg">James Wilson</h3>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Great hotel with excellent facilities. Room service was prompt and food quality outstanding."
                </p>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center items-center gap-4">
          <button
            onClick={showPrev}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 text-white hover:scale-110"
            style={{ backgroundColor: 'rgb(169, 77, 123)' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={showNext}
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