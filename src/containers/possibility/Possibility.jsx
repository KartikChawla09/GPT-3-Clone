import React from "react";
import "./possibility.css";
import possibilityimg from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility-box" id="possibility">
      <div className="possibility-box-image">
        <img src={possibilityimg} alt="vr-img"></img>
      </div>
      <div className="possibility-box-text">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h3>Request Early Access to Get Started</h3>
      </div>
    </div>
  );
};

export default Possibility;
