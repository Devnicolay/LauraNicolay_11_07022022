import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import heroAbout from "../assets/heroAbout.png";
import Footer from "../components/Footer/footer";
import MainAboutPage from "../components/MainAboutPage/mainAboutPage";

function About() {
  return (
    <div>
      <div className="main-body">
        <Header />
        <div className="hero-about">
          <Hero hero={heroAbout} />
        </div>
        <MainAboutPage />
      </div>
      <Footer />
    </div>
  );
}

export default About;
