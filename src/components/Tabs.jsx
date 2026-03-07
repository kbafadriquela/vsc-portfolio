import { NavLink } from "react-router-dom";
import { getIconForFile } from "vscode-icons-js";

const Tabs = ({ openTabs, closeTab }) => {
  return (
    <div className="tabs">
      {openTabs.map((file) => (
        <NavLink
          key={file.name}
          to={file.path}
          className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
        >
          {file.name.endsWith(".md") ? (
            <i className="codicon codicon-info"></i>
          ) : file.name === "README Preview" ? (
            <i className="codicon codicon-list-flat"></i>
          ) : (
            <img
              src={`/icons/${getIconForFile(file.name)}`}
              width={16}
              height={16}
            />
          )}
          {file.name}
          <i
            className="codicon codicon-chrome-close close-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeTab(file);
            }}
          ></i>
        </NavLink>
      ))}
    </div>
  );
};

export default Tabs;
