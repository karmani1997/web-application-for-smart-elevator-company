import React from "react";
import logo from "../assets/elevator-logo.png";

const About = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="Elevator Dashboard Logo" width="120" />
    <h1 className="mb-5">Elevator Dashboard</h1>

    <p className="lead">
      Welcome to the Elevator Dashboard, a web application that provides real-time information and analytics for your building's elevators.
    </p>
  </div>
);

export default About;
