import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ActivityBar from "./components/ActivityBar";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import Editor from "./components/Editor";
import StatusBar from "./components/StatusBar";

import files from "./data/file.js";
import "./styles/theme.css";

function App() {
  const navigate = useNavigate();

   // Pick default file: first file inside "my-portfolio"
  const defaultFile = files[0].children.find((f) => f.name === "README.md");

  // States
  const [openTabs, setOpenTabs] = useState([defaultFile]);
  const [activeTab, setActiveTab] = useState(defaultFile);

  // Navigate to default file on page load
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate(defaultFile.path, { replace: true });
    }
  }, [navigate, defaultFile]);

  const openFile = (file) => {
  // Guard against undefined
  if (!file || !file.name) return;

  // Add file to tabs if not already open
  setOpenTabs((prev) => {
    const exists = prev.find((tab) => tab.name === file.name);
    if (exists) return prev;
    return [...prev, file];
  });

  // Set active tab
  setActiveTab(file);

  // Navigate only if file has a path
  if (file.path) {
    navigate(file.path);
  }
};

  // Close a tab
  const closeTab = (file) => {
    const newTabs = openTabs.filter((tab) => tab.name !== file.name);

    // If closing active tab, switch to last tab or default
    if (activeTab.name === file.name) {
      const nextTab = newTabs[newTabs.length - 1] || defaultFile;
      setActiveTab(nextTab);
      if (nextTab.path) navigate(nextTab.path);
    }

    setOpenTabs(newTabs);
  };

  return (
    <div className="container">
      <div className="main">
        <ActivityBar />

        <div className="sidebar-content">
          <Sidebar openFile={openFile} />

          <div className="content">
            <Tabs
              openTabs={openTabs}
              activeTab={activeTab}
              openFile={openFile}
              closeTab={closeTab}
            />

            <Editor activeTab={activeTab} openFile={openFile} />
          </div>
        </div>
      </div>

      <StatusBar />
    </div>
  );
}

export default App;