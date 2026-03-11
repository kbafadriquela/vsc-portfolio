import { getIconForFile } from "vscode-icons-js";

const Tabs = ({ openTabs, activeTab, closeTab, openFile }) => {
  return (
    <div className="tabs">
      {openTabs.map((file) => {
        // Skip undefined or invalid items
        if (!file || !file.name) return null;

        const isActive = activeTab?.name === file.name;

        // Choose icon
        let icon;
        if (file.type === "image") {
          icon = <i className="codicon codicon-file-media"></i>;
        } else if (file.name.endsWith(".md")) {
          icon = <i className="codicon codicon-info"></i>;
        } else {
          // Only try getIconForFile if file.path exists
          icon = file.path ? (
            <img
              src={`/icons/${getIconForFile(file.name)}`}
              width={16}
              height={16}
              alt="file icon"
            />
          ) : null;
        }

        return (
          <div
            key={file.name}
            className={`tab ${isActive ? "active" : ""}`}
            onClick={() => openFile(file)}
          >
            {icon} {file.name}
            <i
              className="codicon codicon-chrome-close close-btn"
              onClick={(e) => {
                e.stopPropagation();
                closeTab(file);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;