import Carousel from "../components/Carousel/carousel";
import MainApartmentPage from "../components/MainApartmentPage/mainApartmentPage";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Apartment() {
  const [apartmentId, setApartmentId] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let displayComponent = true;
    fetch("../dataApartments.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApartmentId(data);
        const apartmentFoundWithUrlId = data.find(
          (apartment) => apartment.id === id
        );
        if (!apartmentFoundWithUrlId) {
          navigate("/error");
        }
      })
      .catch((error) => {
        console.log("attention an error has been encountered");
      });
    return (displayComponent = false);
  }, [id, apartmentId, navigate]);

  const apartmentFoundWithUrlId = apartmentId.find(
    (apartment) => apartment.id === id
  );

  return (
    <div>
      <div className="main-body">
        {apartmentFoundWithUrlId && (
          <Carousel pictures={apartmentFoundWithUrlId.pictures} />
        )}
        {apartmentFoundWithUrlId && (
          <MainApartmentPage propsApart={apartmentFoundWithUrlId} />
        )}
      </div>
    </div>
  );
}

export default Apartment;
