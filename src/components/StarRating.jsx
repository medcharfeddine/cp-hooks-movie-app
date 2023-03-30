import React from "react";

const StarRating = ({ movie }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < movie) {
      stars.push(<h5>&#9733;</h5>);
    }
  }
  return <div className="star-rating">{stars}</div>;
};

//   movie.rating.map((star, i) => {
//     return (
//       <div key={i} className="star-rating">
//         <img src={star} alt="star" />
//       </div>
//     );
//   });
// };
export default StarRating;
