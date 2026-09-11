import React from "react";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import GitHub from "./components/windows/GitHub";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <GitHub/>
    </main>
  );
};

export default App;
