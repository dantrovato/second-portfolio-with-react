import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProjectGallery from "./components/pages/ProjectGallery";
import Contact from "./components/pages/Contact";
import Header from "./components/Header";

function App() {
  const backgroundStyle = {
    backgroundImage: "url(./treeinlake.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <>
      <Router>
        <div style={backgroundStyle}>
          <Header />
          {/* Wrap Route elements in a Routes component */}
          <Routes basename="second-portfolio-with-react">
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="second-portfolio-with-react/" element={<Home />} />
            <Route
              path="second-portfolio-with-react/about"
              element={<About />}
            />
            <Route
              path="second-portfolio-with-react/projectsgallery"
              element={<ProjectGallery />}
            />
            {/* Define a route that will have descendant routes */}
            <Route
              path="second-portfolio-with-react/contact/*"
              element={<Contact />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
