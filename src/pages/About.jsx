import Hero from "../components/Hero/hero";
import heroAbout from "../assets/heroAbout.png";
import MainAboutPage from "../components/MainAboutPage/mainAboutPage";

function About() {
  return (
    <div>
      <div className="main-body">
        <div className="hero-about">
          <Hero hero={heroAbout} />
        </div>
        <MainAboutPage />
      </div>
    </div>
  );
}

export default About;
