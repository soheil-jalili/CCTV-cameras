import Features from "./features/Features";
import Latest from "./latest/Latest";
import "./Main.css";

import Poster from "./poster/Poster";
const Main = () => {
  return (
    <main className="main">
      <Features />
      <Poster />
      <Latest />
    </main>
  );
};

export default Main;
