import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Carousel from "../components/Carousel/carousel";
import MainApartmentPage from "../components/MainApartmentPage/mainApartmentPage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Apartment() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dataPath = await fetch("../dataApartments.json");
      const data = await dataPath.json();
      setApartments(data);
    } catch (exception) {
      console.log("attention an error has been encountered");
    }
  };

  const { id } = useParams();
  const apartmentFoundWithUrlId = apartments.find(
    (apartment) => apartment.id === id
  );

  let navigate = useNavigate();
  if (!apartmentFoundWithUrlId) {
    navigate("/error");
  }

  return (
    <div>
      <div className="main-body">
        <Header />
        {apartmentFoundWithUrlId && (
          <Carousel pictures={apartmentFoundWithUrlId.pictures} />
        )}
        {apartmentFoundWithUrlId && (
          <MainApartmentPage propsApart={apartmentFoundWithUrlId} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Apartment;
