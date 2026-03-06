import { Routes, Route } from "react-router-dom";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Readme from "../sections/Readme";

const Editor = () => {
  return (
    <div className="editor">
      <Routes>
        <Route path="/" element={<Readme />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Editor;
