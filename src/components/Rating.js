import React from 'react';

const Rating = ({ rating, fillColor }) => {
  const sanitizedRating = Math.min(5, Math.max(0, rating));

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="star" style={{ color: star <= sanitizedRating ? fillColor : 'grey', fontSize: '24px' }}>&#9733;</span>
      ))}
    </div>
  );
};

export default Rating;
