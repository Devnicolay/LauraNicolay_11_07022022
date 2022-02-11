import Header from "../components/Header/header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/footer";

function Error404() {
  return (
    <div>
      <div className="main-body">
        <Header />
        <div className="main-error404">
          <div className="error-404">404</div>
          <div className="error-msg">
            Oups! La page que vous demandez n'existe pas.
          </div>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error404;
