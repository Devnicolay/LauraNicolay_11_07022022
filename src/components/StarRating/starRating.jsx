import { FaStar } from "react-icons/fa";

function StarRating({ rating }) {
  return (
    <div>
      {[...Array(5)].map((star, index, i) => {
        const ratingValue = i + 1;
        return (
          <FaStar
            className="stars"
            key={index}
            values={`${ratingValue}`}
            color={ratingValue <= rating ? "#ff6060" : "#e3e3e3"}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
