import Collapse from "../Collapse/collapse";
import StarRating from "../StarRating/starRating";

function MainApartmentPage({ propsApart }) {
  const apartment = propsApart;
  const tags = apartment.tags;

  return (
    <div className="main-apartment">
      <div className="header-apartment">
        <div className="container-info-apartment">
          <h1 className="title">{apartment.title}</h1>
          <h2 className="location">{apartment.location}</h2>
          <ul className="tags">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="container-host">
          <div className="container-host-person">
            <div className="name">
              <h2 className="host-firstname">
                {apartment.host.name.split(" ")[0]}
              </h2>
              <h2 className="host-lastname">
                {apartment.host.name.split(" ")[1]}
              </h2>
            </div>
            <img className="host-img" src={apartment.host.picture} alt="host" />
          </div>
          <div className="container-stars">
            <StarRating rating={propsApart.rating} />
          </div>
        </div>
      </div>
      <div className="main-apartment">
        <Collapse title={"Description"} content={propsApart.description} />
        <Collapse
          title={"Équipements"}
          content={propsApart.equipments.map((equipment, index) => (
            <p className="equipment" key={index}>
              {equipment}
            </p>
          ))}
        />
      </div>
    </div>
  );
}

export default MainApartmentPage;
