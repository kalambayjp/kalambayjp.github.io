import "./index.scss";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>Projects</h1>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
