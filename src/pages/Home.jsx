import Header from "../components/Header/header";
import Hero from "../components/HeroHome/hero";
import MainHome from "../components/ApartmentsHome/mainHome";
import Footer from "../components/Footer/footer";

function Home() {
  return (
    <div>
      <div className="main-body">
        <Header />
        <Hero />
        <MainHome />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
