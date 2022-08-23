import React, { useState } from "react";
import "./Tour.scss";

const Tour = ({ id, city, img, name, info, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt={name} />
        <span className="close-btn" onClick={() => removeTour(id)}>
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={() => setShowInfo(!showInfo)}>
            <i className="fas fa-caret-square-down" />
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};

export default Tour;
