import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Apartment from "../pages/Apartment";
import Error404 from "../pages/Error404";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const home = "/";
const about = "/about";
const apartment = "/apartment/:id";
const error = "/error";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path={home} element={<Home />}></Route>
        <Route path={about} element={<About />}></Route>
        <Route path={apartment} element={<Apartment />}></Route>
        <Route path={error} element={<Error404 />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
