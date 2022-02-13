import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";

function BtnCarousel({ moveSlide, direction }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "next" : "prev"}
    >
      <img
        src={direction === "next" ? arrowRight : arrowLeft}
        alt="next previous slide"
      />
    </button>
  );
}

export default BtnCarousel;
