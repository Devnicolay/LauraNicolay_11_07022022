import { useState } from "react";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";

function Carousel({ pictures }) {
  const [carouselIndex, setCarouselIndex] = useState(1);
  console.log(carouselIndex);

  function nextPicture() {
    if (carouselIndex !== pictures.length) {
      setCarouselIndex(carouselIndex + 1);
    } else if (carouselIndex === pictures.length) {
      setCarouselIndex(1);
    }
  }

  function prevPicture() {
    if (carouselIndex !== 1) {
      setCarouselIndex(carouselIndex - 1);
    } else if (carouselIndex === 1) {
      setCarouselIndex(pictures.length);
    }
  }

  return (
    <div className="container-carousel">
      {pictures.map((picture, index) => {
        return (
          <div
            className={
              carouselIndex === index + 1 ? "carousel active-anim" : "carousel"
            }
            key={index}
          >
            <img className="carousel-img" src={picture} alt="apartment" />
          </div>
        );
      })}
      <button type="button" className="btn-carousel-prev" onClick={prevPicture}>
        <img src={arrowLeft} alt="previous slide" />
      </button>
      <button type="button" className="btn-carousel-next" onClick={nextPicture}>
        <img src={arrowRight} alt="next slide" />
      </button>
    </div>
  );
}

export default Carousel;
