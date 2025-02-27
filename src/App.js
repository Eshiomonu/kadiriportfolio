import React from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
    </div>
  );
};

export default App;
