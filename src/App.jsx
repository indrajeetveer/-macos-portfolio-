import React from "react";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import GitHub from "./components/windows/GitHub";
import Note from "./components/windows/Note"
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <GitHub/>
      <Note/>
      <Resume/>
      <Spotify/>
    </main>
  );
};

export default App;
