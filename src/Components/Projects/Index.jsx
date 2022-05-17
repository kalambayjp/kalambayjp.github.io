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
    {
      name: "NBA Tracker",
      description:
        "This app allows users to save NBA players and teams to their profile and keep up with season stats as well as view trends for up to the last 10 games.",
      codeLink: "https://github.com/kalambayjp/nba-stat-tracker",
      projectLink: null,
    },
    {
      name: "Felix Says",
      description:
        "A memorization game where a button sequence is displayed and the user must duplicate the sequence without error. Built with HTML, ReactJS, CSS",
      codeLink: "https://github.com/kalambayjp/Felix-Says",
      projectLink: "https://kalambayjp.github.io/Felix-Says/",
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
