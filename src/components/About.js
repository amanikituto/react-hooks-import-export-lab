import React from "react";
import { image } from "../data/user";

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={image} alt="A photo of me" />
      <p>I am a software engineer with a passion for building beautiful and user-friendly applications.</p>
    </div>
  );
};

export default About;
