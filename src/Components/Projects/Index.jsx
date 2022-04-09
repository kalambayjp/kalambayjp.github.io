import Project from "./Project";

import "./index.scss";

const Projects = () => {
  const myProjects = [
    {
      name: "Tech Market",
      description:
        "A buy & sell platform where perspective buyers have the ability to message sellers through the app! Built using EJS, JS, CSS. jQuery, PostgreSQL.",
      codeLink: "https://github.com/kalambayjp/midterm_marketplace",
      projectLink: null,
    },
    // {
    //   name: "NBA Player Tracker",
    //   description:
    //     "An NBA tracker where a user selects their favourite players and get updates on live player stats",
    //   codeLink: "TBD",
    //   projectLink: "TBD",
    // },
    {
      name: "Felix Says",
      description:
        "A memorization game where a button sequence is displayed and the user must duplicate the sequence without error. Built with HTML, ReactJS, CSS",
      codeLink: "https://github.com/kalambayjp/Felix-Says",
      projectLink: "TBD",
    },
    {
      name: "CondoFlex",
      description:
        "Condo amenities management app to create and edit reservations for your building's amenities ",
      codeLink: "https://github.com/kalambayjp/CondoFlex",
      projectLink: null,
    },
  ];

  const projectElements = myProjects.map((project, i) => (
    <Project key={project.name + i} {...project} />
  ));

  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1 id="projects-header">Projects</h1>
        {projectElements}
      </div>
    </div>
  );
};

export default Projects;