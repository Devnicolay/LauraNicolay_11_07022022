import { useEffect, useState } from "react";
import "../../styles/style.css";
import { Link } from "react-router-dom";

function ApartCard() {
  const [apartments, setApartments] = useState([]);

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
    <div className="main-home">
      <div className="container-apartment">
        {apartments.map((apartment, index) => (
          <Link key={index} to={`/apartment/${apartment.id}`}>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ApartCard;