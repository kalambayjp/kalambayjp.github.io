import "./project.scss";

const Project = (props) => {
  return (
    <div className="project-container">
      <h2>Title</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, odit
        beatae perspiciatis quas quasi sed at eum ab delectus blanditiis id,
        velit impedit vero provident rem rerum quam dolorem repellat?
      </p>
      <div classname="project-links">
        <button className="flat-button">View Project</button>
        <button className="flat-button">View Code</button>
      </div>
    </div>
  );
};

export default Project;
