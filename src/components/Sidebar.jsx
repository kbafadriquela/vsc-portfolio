import files from "../data/file.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getIconForFile } from "vscode-icons-js";

const Sidebar = ({ openFile }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // current path

  const handleClick = (file) => {
    openFile(file); // update active tab
    navigate(file.path); // update browser URL
  };

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
          {files.map((file) => {
            const isActive = location.pathname === file.path; // check active file
            return (
              <Link
                key={file.name}
                to={file.path}
                className={`file ${isActive ? "active" : ""}`}
                onClick={() => handleClick(file)}
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
            );
          })}
          <div className="folder subfolder" onClick={() => setOpen(!open)}>
            {/* <i
              className={`codicon codicon-chevron-right arrow ${open ? "open" : ""}`}
            ></i> */}
            <i className="codicon codicon-folder"></i>
            <span>assets</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
