import logoFooter from "../../assets/logoFooter.png";
import "../../styles/style.css";

function Footer() {
  return (
    <div className="footer">
      <img id="logo-footer" src={logoFooter} alt="kasa" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
