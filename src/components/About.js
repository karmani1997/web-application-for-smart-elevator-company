import React from "react";
import logo from "../assets/elevator-logo.png";

const About = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="Elevator Dashboard Logo" width="120" />
    <h1 className="mb-5">Elevator Dashboard</h1>

    <p className="lead">
      Welcome to the Elevator Dashboard! <br/>
      Please login to view the dashboard information.
    </p>
  </div>
);

export default About;
