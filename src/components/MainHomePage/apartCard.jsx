import { useEffect, useState } from "react";
import "../../styles/style.css";
import { Link } from "react-router-dom";

function ApartCard() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    let displayComponent = true;
    fetch("dataApartments.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApartments(data);
      })
      .catch((error) => {
        console.log("attention an error has been encountered");
      });
    return (displayComponent = false);
  }, []);

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
