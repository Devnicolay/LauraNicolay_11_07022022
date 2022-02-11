import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";

function Carousel() {
  return (
    <div>
      <div className="carousel-container">
        <img
          className="carousel-img"
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg"
          alt="apartment"
        />
        <button type="button" className="carousel-arrow-left">
          <img src={arrowLeft} alt="previous" />
        </button>
        <button type="button" className="carousel-arrow-right">
          <img src={arrowRight} alt="next" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
