import React from "react";

function Contact(props) {
  const styles = {
    width: { width: "80%", opacity: "0.6", margin: "auto" },
  };
  return (
    <div className="card mt-5" style={styles.width}>
      <div className="card-body">
        <h5 className="card-title">Daniele Trovato</h5>
        <h6 className="card-subtitle mb-2 text-muted">Phone +447984290884</h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Email dantrovato@gmail.com
        </h6>

        <a
          href="https://www.linkedin.com/in/daniele-trovato-6a130718a/"
          className="card-link"
        >
          LinedIn
        </a>
        <a href="https://www.github.com/dantrovato" className="card-link">
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1d_f5eUS48OImEFJ62ihSVMTalcgzvqq7/view?usp=sharing"
          className="card-link"
        >
          CV
        </a>
      </div>
    </div>
  );
}

export default Contact;
