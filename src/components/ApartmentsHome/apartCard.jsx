import { useEffect, useState } from "react";
import "../../styles/style.css";

function ApartCard() {
  const [apartments, setApartments] = useState([]);

  //   useEffect(() => {
  //     fetch("dataApartments.json")
  //       .then((response) => {
  //         setApartments(response);
  //       })
  //       .catch((error) => console.log("attention an error has been encountered"));
  //   }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dataPath = await fetch("dataApartments.json");
      const data = await dataPath.json();
      setApartments(data);
    } catch (exception) {
      console.log("attention an error has been encountered");
    }
  };

  return (
    <div className="container-apartment">
      {apartments.map((apartment) => (
        <div className="apart-card">
          <div
            className="apart-card"
            style={{
              backgroundImage: `url(${apartment.cover})`,
            }}
          >
            <h3 className="apart-card-title">{apartment.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApartCard;
