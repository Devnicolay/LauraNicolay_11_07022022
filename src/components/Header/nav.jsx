import { NavLink } from "react-router-dom";
import "../../styles/style.css";

function Nav() {
  return (
    <nav className="header-nav">
      <NavLink activeclassname="active-link" to={"/"}>
        Accueil
      </NavLink>
      <NavLink activeclassname="active-link" to="/about">
        A propos
      </NavLink>
    </nav>
  );
}

export default Nav;
