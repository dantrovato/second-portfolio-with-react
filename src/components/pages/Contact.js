import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Learn from "./Learn";
import { PDF } from "react-embed-pdf";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Email: dantrovato@gmail.com</p>
      <p>
        <a href="https://www.linkedin.com/in/daniele-trovato-6a130718a/">
          LinkedIn
        </a>
      </p>
      <p>
        <a href="https://www.github.com/dantrovato">GitHub</a>
      </p>
      <p>
        <a href="https://drive.google.com/file/d/1d_f5eUS48OImEFJ62ihSVMTalcgzvqq7/view?usp=sharing">
          CV
        </a>
      </p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Contact;
