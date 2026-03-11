import { Routes, Route, Navigate } from "react-router-dom";
import Readme from "../sections/Readme";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import Preview from "../components/Preview";
import CodeBlock from "../components/CodeBlock";

const Editor = ({ activeTab, openFile }) => {
  // Zoom image on click
  const handleZoom = (e) => e.target.classList.toggle("zoomed");

  return (
    <div className="editor">
      <Routes>
        {/* Static section routes */}
        <Route path="/" element={<Readme openFile={openFile} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route
          path="/preview"
          element={<Preview markdown={activeTab?.markdown || ""} />}
        />

        {/* Dynamic file route */}
        <Route
          path="*"
          element={
            activeTab ? (
              activeTab.type === "image" ? (
                <div className="image-wrapper">
                  <img
                    src={activeTab.path}
                    alt={activeTab.name}
                    className="zoomable-image"
                    onClick={handleZoom}
                  />
                </div>
              ) : (
                <CodeBlock
                  language={activeTab.language || "javascript"}
                  code={activeTab.content || ""}
                />
              )
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default Editor;