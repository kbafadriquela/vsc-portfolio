import { Routes, Route, Navigate } from "react-router-dom";
import Readme from "../sections/Readme";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import Preview from "../components/Preview";

const Editor = ({ activeTab, openFile }) => {
  return (
    <div className="editor">
      <Routes>
        <Route path="/" element={<Readme openFile={openFile} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/preview" element={<Preview markdown={activeTab.markdown}/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default Editor;