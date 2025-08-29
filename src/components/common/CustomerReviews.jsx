import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const CustomerReviews = () => {
  const [page, setPage] = useState(0);

  const showNext = () => {
    if (page < 1) setPage(page + 1);
    else setPage(0);
  };

  const showPrev = () => {
    if (page > 0) setPage(page - 1);
    else setPage(1);
  };

  const sectionStyle = {
    padding: '64px 16px',
    backgroundColor: '#f9fafb'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '48px'
  };

  const subtitleStyle = {
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.1em',
    marginBottom: '8px',
    color: 'rgb(169, 77, 123)'
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '16px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginBottom: '48px'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const avatarContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px'
  };

  const avatarStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    marginRight: '16px',
    backgroundColor: 'rgb(169, 77, 123)'
  };

  const nameStyle = {
    fontWeight: '600',
    color: 'black',
    fontSize: '18px',
    margin: 0
  };

  const starsStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  };

  const reviewStyle = {
    color: '#374151',
    lineHeight: '1.6',
    margin: 0
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px'
  };

  const buttonStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    color: 'white',
    backgroundColor: 'rgb(169, 77, 123)',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <p style={subtitleStyle}>TESTIMONIALS</p>
          <h2 style={titleStyle}>What Our Guests Say</h2>
        </div>

        <div style={gridStyle}>
          {page === 0 ? (
            <>
              <div style={cardStyle}>
                <div style={avatarContainerStyle}>
                  <div style={avatarStyle}>SJ</div>
                  <h3 style={nameStyle}>Sarah Johnson</h3>
                </div>
                <div style={starsStyle}>
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                </div>
                <p style={reviewStyle}>
                  "Absolutely wonderful stay! The service was exceptional and the rooms were spotless."
                </p>
              </div>

              <div style={cardStyle}>
                <div style={avatarContainerStyle}>
                  <div style={avatarStyle}>MC</div>
                  <h3 style={nameStyle}>Michael Chen</h3>
                </div>
                <div style={starsStyle}>
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                </div>
                <p style={reviewStyle}>
                  "Best hotel experience I've ever had. The location is perfect and amenities are top-notch."
                </p>
              </div>

              <div style={cardStyle}>
                <div style={avatarContainerStyle}>
                  <div style={avatarStyle}>ER</div>
                  <h3 style={nameStyle}>Emily Rodriguez</h3>
                </div>
                <div style={starsStyle}>
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#d1d5db', fill: '#d1d5db'}} />
                </div>
                <p style={reviewStyle}>
                  "Beautiful hotel with stunning views. The spa services were relaxing and food was delicious."
                </p>
              </div>
            </>
          ) : (
            <>
              <div style={cardStyle}>
                <div style={avatarContainerStyle}>
                  <div style={avatarStyle}>DT</div>
                  <h3 style={nameStyle}>David Thompson</h3>
                </div>
                <div style={starsStyle}>
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                </div>
                <p style={reviewStyle}>
                  "Exceeded all expectations! The room was spacious and elegantly decorated."
                </p>
              </div>

              <div style={cardStyle}>
                <div style={avatarContainerStyle}>
                  <div style={avatarStyle}>LP</div>
                  <h3 style={nameStyle}>Lisa Park</h3>
                </div>
                <div style={starsStyle}>
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                </div>
                <p style={reviewStyle}>
                  "Perfect location and amazing service. The hotel staff made us feel like royalty."
                </p>
              </div>

              <div style={cardStyle}>
                <div style={avatarContainerStyle}>
                  <div style={avatarStyle}>JW</div>
                  <h3 style={nameStyle}>James Wilson</h3>
                </div>
                <div style={starsStyle}>
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />
                  <Star style={{width: '16px', height: '16px', color: '#d1d5db', fill: '#d1d5db'}} />
                </div>
                <p style={reviewStyle}>
                  "Great hotel with excellent facilities. Room service was prompt and food quality outstanding."
                </p>
              </div>
            </>
          )}
        </div>

        <div style={buttonContainerStyle}>
          <button onClick={showPrev} style={buttonStyle}>
            <ChevronLeft style={{width: '24px', height: '24px'}} />
          </button>

          <button onClick={showNext} style={buttonStyle}>
            <ChevronRight style={{width: '24px', height: '24px'}} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;