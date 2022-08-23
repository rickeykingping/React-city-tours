import React, { useState } from "react";
import "./TourList.scss";
import { tourData } from "./tourData";
import Tour from "../Tour/Tour";

const TourList = () => {
  const [state, setState] = useState(tourData);
  const removeTour = (per) => {
    const np = state.filter((po) => po.id !== per);
    setState(np);
  };

  return (
    <section className="tourList">
      {state.map((tor) => {
        return <Tour key={tor.id} {...tor} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default TourList;
