import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="bg"></div>
      <div className="content">
        <h1 className=" title">
          <span className="em">R E A C T</span> / T O D O
        </h1>
        <p className="createdby">
          Created by{" "}
          <a
            className="name"
            href="https://github.com/bloodzmoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thanyathon
          </a>
        </p>
      </div>
    </div>
  );
};
