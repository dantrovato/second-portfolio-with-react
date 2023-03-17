import React from "react";

function About() {
  const styles = {
    pic: { height: "10rem" },
  };

  return (
    <div>
      <div className="px-4 py-5 my-3 text-center text-white">
        <h1 className="display-5 fw-bold">About Daniele</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Front-end web developer leveraging a background in the fashion
            industry to bring in good communication and people skills.
            Self-taught for the most part and currently completing Trilogy
            Coding Bootcamp. Creative thinker with a passion for web
            applications. Strengths in consistency and self-motivation
          </p>
        </div>
        <img src="images/dan.JPG" alt="" style={styles.pic}></img>
      </div>
    </div>
  );
}

export default About;
