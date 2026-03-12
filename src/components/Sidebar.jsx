import files from "../data/file.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getIconForFile } from "vscode-icons-js";

const Sidebar = ({ openFile, sidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

   // Initialize openFolders with "my-portfolio" expanded
  const initialOpenFolders = { "krizia-bianca": true };
  const [openFolders, setOpenFolders] = useState(initialOpenFolders);

  // Toggle folder open/close
  const toggleFolder = (name) => {
    setOpenFolders({ ...openFolders, [name]: !openFolders[name] });
  };

  // Handle clicking a file
  const handleClick = (file) => {
    if (!file.children) {
      openFile(file);          // open in editor
      navigate(file.path);     // change route
    }
  };

  // Render files and folders recursively
  const renderFiles = (items, level = 0) => {
    return items.map((file) => {
      const padding = 12 + level * 16;

      // Folder
      if (file.children) {
        const isOpen = openFolders[file.name] || false;
        return (
          <div key={file.name}>
            <div
              className="folder"
              style={{ paddingLeft: padding }}
              onClick={() => toggleFolder(file.name)}
            >
              <i className={`codicon codicon-chevron-right ${isOpen ? "open" : ""}`}></i>
              <i className="codicon codicon-folder"></i>
              {file.name}
            </div>
            {isOpen && <div className="files">{renderFiles(file.children, level + 1)}</div>}
          </div>
        );
      }

      // File
      const isActive = location.pathname === file.path;

      const icon = file.type === "image"
        ? <i className="codicon codicon-file-media"></i>
        : file.name.endsWith(".md")
        ? <i className="codicon codicon-info"></i>
        : <img src={`/icons/${getIconForFile(file.name)}`} width={16} height={16} alt="file icon" />;

      return (
        <Link
          key={file.name}
          to={file.path}
          className={`file ${isActive ? "active" : ""}`}
          style={{ paddingLeft: padding }}
          onClick={() => handleClick(file)}
        >
          {icon} {file.name}
        </Link>
      );
    });
  };

  return (
    <div className={`explorer ${sidebarOpen ? "open" : "collapsed"}`}>
      <div className="explorer-title">EXPLORER</div>
      {renderFiles(files)}
    </div>
  );
};

export default Sidebar;