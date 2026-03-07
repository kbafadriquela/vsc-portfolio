import { Routes, Route, Navigate } from "react-router-dom";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Readme from "../sections/Readme";
import Skills from "../sections/Skills";

const Editor = ({ activeTab }) => {
  return (
    <div className="editor">
      <Routes>
        <Route path="/" element={<Readme />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default Editor;
