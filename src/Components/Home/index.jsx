import { Link } from "react-router-dom";
import CubeAnimation from "../CubeAnimation";
import "./index.scss";

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Welcome, <br />
            I'm Jp Kalambay <br />
            Full-Stack Web Developer
          </h1>
          <h2>JavaScript / HTML / CSS / SQL</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <CubeAnimation />
      </div>
    </>
  );
};

export default Home;
