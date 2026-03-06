import files from "../data/file.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getIconForFile } from "vscode-icons-js";

const Sidebar = ({ openFile }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="explorer">
      <div className="explorer-title">EXPLORER</div>
      <div className="folder" onClick={() => setOpen(!open)}>
        <i
          className={`codicon codicon-chevron-right arrow ${open ? "open" : ""}`}
        ></i>
        <i className="codicon codicon-folder"></i>
        <span>my-portfolio</span>
      </div>

      {open && (
        <div className="files">
          {files.map((file) => (
            <Link
              key={file.name}
              to={file.path}
              className={`file ${file.active ? "active" : ""}`}
              onClick={() => openFile(file)}
            >
              {file.name.endsWith(".md") ? (
                <i className="codicon codicon-info"></i>
              ) : (
                <img
                  src={`/icons/${getIconForFile(file.name)}`}
                  width={16}
                  height={16}
                />
              )}
              {file.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
