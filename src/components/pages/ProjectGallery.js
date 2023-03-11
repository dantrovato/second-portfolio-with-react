import React from "react";
import Project from "../Project";
import projectJson from "../../projects.json";

function ProjectGallery() {
  const styles = {
    display: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      // backgroundColor: "grey",
    },
  };

  console.log(projectJson);

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-white">Projects</h1>
      <section id="projects" className="container" style={styles.display}>
        <Project {...projectJson[0]} />
        <Project {...projectJson[1]} />
        <Project {...projectJson[2]} />
        <Project {...projectJson[3]} />
        <Project {...projectJson[4]} />
        <Project {...projectJson[5]} />
      </section>
    </div>
  );
}

export default ProjectGallery;
