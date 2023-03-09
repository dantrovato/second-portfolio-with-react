import React from "react";

function Home() {
  return (
    <div className="px-4 py-5 my-5 text-center text-white">
      {/* <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
      <h1 className="display-5 fw-bold">Daniele Trovato</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Front-end web developer leveraging a background in the fashion
          industry to bring people skills. Self-taught for the most part and
          currently completing Trilogy Coding Bootcamp. Creative thinker with a
          passion for web applications. Strengths in consistency and
          self-motivation
        </p>
        {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Primary button
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Secondary
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
