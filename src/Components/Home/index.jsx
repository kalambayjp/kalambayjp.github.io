import { Link } from "react-router-dom";
import CubeAnimation from "../CubeAnimation";
import "./index.scss";

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi <br />
            I'm Jp Kalambay, <br />
            Full-Stack Web Developer
          </h1>
          <h2>JavaScript / HTML / CSS / SQL</h2>
          {/* <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
          <div className="about-section">
            <p>
              Proficient in JavaScript, HTML, CSS, SQL and testing frameworks
              such as Jest, Mocha and cypress.
            </p>

            <p>
              I currently develop websites for small businesses and mentor
              bootcamp students at Lighthouse Labs. I am also on the look out
              for full-time opportunities. I've worked on several apps, some of
              which you can checkout on my{" "}
              <Link to="/projects">projects page</Link>.
            </p>

            <p>
              Outside coding my interests include exercise and nutrition, sports
              and aviation.
            </p>
          </div>
        </div>
        <CubeAnimation />
      </div>
    </>
  );
};

export default Home;
