import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Note Taker',
      description: 'Console App',
      link: "https://github.com/harrisbunn/NoteTaker",
      repo: "https://github.com/harrisbunn/NoteTaker"
    },
    {
      name: 'Task Manager',
      description: 'HTML/CSS',
      link: "https://github.com/JuanGirelli/Task-Manager",
      repo: "https://github.com/JuanGirelli/Task-Manager"
    },
    {
      name: 'Shonen Showdown',
      description: 'Node/Express/MySQL/React',
      link: "https://github.com/harrisbunn/Shonen-Showdown",
      repo: "https://github.com/harrisbunn/Shonen-Showdown"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
