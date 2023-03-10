import React from "react";

function Projects() {
  const styles = {
    width: {
      width: "18rem",
    },
    display: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "grey",
    },
  };
  return (
    <div>
      <h1>Projects</h1>
      <section id="projects" className="container" style={styles.display}>
        <div>
          <div className="card m-4 p-4" style={styles.width}>
            <img
              className="card-img-top"
              src="images/pierian.png"
              alt="Card image cap"
            />
            <div clasName="card-body">
              <p clasName="card-text">
                A simple search engine that connects to a bunch of APIs to
                display 3 articles, 3 books and 3 videos about a related topic
                <a href="https://github.com/dantrovato/dan-will-daniel-project-1">
                  github
                </a>
              </p>
              <a
                href="https://dantrovato.github.io/dan-will-daniel-project-1/"
                className="btn btn-primary"
              >
                The pierian files
              </a>
            </div>
          </div>
          <div className="card m-4 p-4" style={styles.width}>
            <img
              className="card-img-top"
              src="images/weather.png"
              alt="Card image cap"
            />
            <div clasName="card-body">
              <p className="card-text">
                A wheather application to see the weather for current day and
                the next five anywhere in the world. Repo at
                <a href="https://github.com/dantrovato/weather-dashboard">
                  github
                </a>
              </p>
              <a
                href="https://dantrovato.github.io/weather-dashboard/"
                className="btn btn-primary"
              >
                Weather
              </a>
            </div>
          </div>
          <div className="card m-4 p-4" style={styles.width}>
            <img
              clasName="card-img-top"
              src="images/workday_scheduler.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                A One day schedule organiser that persist data between
                refreshes. Repo at
                <a href="https://github.com/dantrovato/work-day-scheduler">
                  github
                </a>
              </p>
              <a
                href="https://dantrovato.github.io/work-day-scheduler/"
                className="btn btn-primary"
              >
                Sheduler
              </a>
            </div>
          </div>
          <div className="card m-4 p-4" style={styles.width}>
            <img
              class="card-img-top"
              src="images/fairshare.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                A React App to help flatmates decide who should pay what. Repo
                at
                <a href="https://github.com/dantrovato/fair-share-react">
                  github
                </a>
              </p>
              <a
                href="https://cheerful-rolypoly-45ef0c.netlify.app/"
                className="btn btn-primary"
              >
                Fairshare
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
