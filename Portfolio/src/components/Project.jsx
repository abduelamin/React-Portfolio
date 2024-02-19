import React from "react";
import { useParams } from "react-router-dom";

const Project = ({ myProjects }) => {
  const { id } = useParams();

  const { title, deployedLink, githubLink, image, description } =
    myProjects[id];
  return (
    <>
      <h1>{title}</h1>
      <h2>{deployedLink}</h2>
      <h2>{githubLink}</h2>
    </>
  );
};

export default Project;
