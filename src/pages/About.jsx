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
        <Hero hero={heroAbout} />
        <MainAboutPage />
      </div>
      <Footer />
    </div>
  );
}

export default About;
