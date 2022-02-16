function Hero({ hero, title }) {
  return (
    <div className="hero-container">
      <img className="img-hero" src={hero} alt="hero" />
      <h1 className="title-hero">{title}</h1>
    </div>
  );
}

export default Hero;
