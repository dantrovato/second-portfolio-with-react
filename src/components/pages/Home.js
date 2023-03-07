import React from "react";

function Home() {
  const backgroundStyle = {
    backgroundImage: "url(./treeinlake.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    // <div style={backgroundStyle}>
    //   <h1>Daniele Trovato</h1>
    //   <h2>Junior Front End Developer</h2>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
    //     velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
    //     ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
    //     non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
    //     ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
    //     rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
    //     tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
    //     porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
    //     vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
    //     fames ac ante ipsum primis in faucibus.
    //   </p>
    // </div>
    // <h1 class="visually-hidden">Heroes examples</h1>

    <div class="px-4 py-5 my-5 text-center text-white" style={backgroundStyle}>
      {/* <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
      <h1 class="display-5 fw-bold">Daniele Trovato</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
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
