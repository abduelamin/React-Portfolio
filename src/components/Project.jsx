import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Project.css";

const Project = ({ myProjects }) => {
  const { id } = useParams();

  const { title, deployedLink, githubLink } = myProjects[id];
  return (
    <>
      <div className="singleProjectContainer">
        <h1>{title}</h1>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          <button>Access The Full Site</button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button>Github Repository</button>
        </a>
      </div>
    </>
  );
};

export default Project;
