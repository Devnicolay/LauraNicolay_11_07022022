import colorfulStar from "../../assets/colorfulStar.png";
import emptyStar from "../../assets/emptyStar.png";

function StarRating({ rating }) {
  console.log(rating);
  return (
    <div>
      <img src={colorfulStar} alt="rating" />
      <img src={colorfulStar} alt="rating" />
      <img src={colorfulStar} alt="rating" />
      <img src={emptyStar} alt="rating" />
      <img src={emptyStar} alt="rating" />
    </div>
  );
}

export default StarRating;
