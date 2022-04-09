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
          {/* <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
          <div className="about-section">
            <p>
              I am a full-stack developer who is proficient in JavaScript, HTML,
              CSS, SQL and testing frameworks such as Jest, Mocha and cypress.
            </p>

            <p>
              I am currently working as a freelance developer building sites for
              small local companies and as a part-time mentor, helping coding
              bootcamp students at Lighthouse Labs. I am also on the look out
              for full-time opportunities. Prior to this I developed several
              apps, some of which I have highlighted in the projects page which
              you can view <Link to="/projects">here</Link>
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
