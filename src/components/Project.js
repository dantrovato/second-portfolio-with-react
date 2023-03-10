import React from "react";

export default function Project({
  id,
  name,
  src,
  description,
  github,
  deployed,
}) {
  const styles = {
    width: {
      width: "18rem",
    },
    background: {
      backgroundColor: "grey",
    },
  };

  return (
    <div style={styles.background}>
      <div className="card m-4 p-4" style={styles.width}>
        <img className="card-img-top" src={src} alt="Card image cap" />
        <div clasName="card-body">
          <p clasName="card-text">
            {description}
            <a href={github}>github</a>
          </p>
          <a href={deployed} className="btn btn-primary">
            {name}
          </a>
        </div>
      </div>
    </div>
  );
}
