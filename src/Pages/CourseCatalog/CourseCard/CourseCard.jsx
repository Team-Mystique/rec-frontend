import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// Helper to render rating stars
const Rating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<FaStar key={i} />);
    } else if (i === Math.ceil(value) && !Number.isInteger(value)) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return <div className="rating-stars">{stars}</div>;
};

const CourseCard = ({ course, view }) => {
  return (
    <div className={`course-card ${view}`}>
      <div className="course-card-image">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-instructor">By {course.instructor}</p>
        <div className="course-card-rating">
          <span className="rating-value">{course.rating.toFixed(1)}</span>
          <Rating value={course.rating} />
          <span className="rating-count">({course.enrollmentCount.toLocaleString()})</span>
        </div>
        <div className="course-card-footer">
          <p className={`course-card-price ${course.price === 0 ? 'free' : ''}`}>
            {course.price === 0 ? 'Free' : `$${course.price}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;