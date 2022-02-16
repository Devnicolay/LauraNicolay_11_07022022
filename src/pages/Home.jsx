import Hero from "../components/Hero/hero";
import heroHome from "../assets/heroHome.png";
import ApartCard from "../components/MainHomePage/apartCard";

function Home() {
  return (
    <div>
      <div className="main-body">
        <Hero hero={heroHome} title={"Chez vous, partout et ailleurs"} />
        <ApartCard />
      </div>
    </div>
  );
}

export default Home;
