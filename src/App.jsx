import ActivityBar from "./components/ActivityBar";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import StatusBar from "./components/StatusBar";
import Tabs from "./components/Tabs";
import files from "./data/file.js";
import "./styles/theme.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const defaultFile = files.find((file) => file.name === "README.md");

  const [openTabs, setOpenTabs] = useState([defaultFile]);
  const [activeTab, setActiveTab] = useState(defaultFile);

  useEffect(() => {
    if(window.location.pathname === "/") {
      navigate(defaultFile.path, {replace: true });
    }
  }, [navigate, defaultFile]);
  
  const openFile = (file) => {
    const exists = openTabs.find((tab) => tab.name === file.name);

    if (!exists) {
      setOpenTabs((openTab) => [...openTab, file]);
    }

    setActiveTab(file);
    navigate(file.path); // navigate when opening a file
  };

  const closeTab = (file) => {
    const filtered = openTabs.filter((tab) => tab.name !== file.name);
    setOpenTabs(filtered);

    if (activeTab?.name === file.name) {
      if (filtered.length > 0) {
        //switch to last opened tab
        setActiveTab(filtered[filtered.length - 1]);
        navigate(filtered[filtered.length - 1].path); // navigate to last opened tab
      } else {
        //no tabs left
        setActiveTab(null);
        navigate("/"); // fallback to README.md
      }
    }
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
              setActiveTab={setActiveTab}
              closeTab={closeTab}
            />

            <Editor activeTab={activeTab} />
          </div>
        </div>
      </div>

      <StatusBar />
    </div>
  );
}

export default App;
