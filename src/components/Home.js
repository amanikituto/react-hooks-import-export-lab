import React from "react";
import { username, city } from "../data/user";

const Home = () => {
  return (
    <div>
      <h1>Welcome to my portfolio site!</h1>
      <p>My name is {username} and I live in {city}.</p>
    </div>
  );
};

export default Home;
