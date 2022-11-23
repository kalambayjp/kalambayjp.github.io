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
          
          <div className="about-section">
          <p>
          Proficient in JavaScript, C#, Dart, HTML, CSS, SQL and testing frameworks such as Jest, Mocha and cypress.
        </p>

        <p>
          I currently work as a freelance developer, building sites for
          local companies. I am also on the look out for
          full-time opportunities. Prior to this I developed several apps, some
          of which I have highlighted in the projects page which you can view{" "}
          <Link to="/projects">here</Link>. I also designed and built the first module of an educational VR game!
        </p>

        <p>
          Outside coding, my interests include exercise and nutrition, sports and
          aviation.
        </p>
          </div>
        </div>
        <CubeAnimation />
      </div>
    </>
  );
};

export default Home;
