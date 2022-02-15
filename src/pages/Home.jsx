import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import MainHome from "../components/ApartmentsHome/mainHome";
import Footer from "../components/Footer/footer";
import heroHome from "../assets/heroHome.png";

function Home() {
  return (
    <div>
      <div className="main-body">
        <Header />
        <div className="hero-home">
          <Hero hero={heroHome} title={"Chez vous, partout et ailleurs"} />
        </div>
        <MainHome />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
