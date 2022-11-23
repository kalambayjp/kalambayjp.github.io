import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          I am a full-stack developer who is proficient in JavaScript, C#, Dart, HTML,
          CSS, SQL and testing frameworks such as Jest, Mocha and cypress.
        </p>

        <p>
          I am currently working as a freelance developer, building sites for
          local companies. I am also on the look out for
          full-time opportunities. Prior to this I developed several apps, some
          of which I have highlighted in the projects page which you can view{" "}
          <Link to="/projects">here</Link> and designed and built the the first module of an educational VR game!
        </p>

        <p>
          Outside coding my interests include exercise and nutrition, sports and
          aviation.
        </p>
      </div>
    </div>
  );
};

export default About;
