import "./project.scss";

const Project = (props) => {
  const { name, description, codeLink, projectLink } = props;

  return (
    <div className="project-container">
      <h3>{name}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {projectLink && (
          <a target="_blank" rel="noreferrer" href={projectLink}>
            <button className="project-link">View Project</button>
          </a>
        )}

        <a target="_blank" rel="noreferrer" href={codeLink}>
          <button className="project-link">View Code</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
