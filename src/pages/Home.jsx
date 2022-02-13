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
        <Hero hero={heroHome} title={"Chez vous, partout et ailleurs"} />
        <MainHome />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
