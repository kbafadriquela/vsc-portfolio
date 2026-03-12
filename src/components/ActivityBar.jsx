const ActivityBar = ({ toggleSidebar }) => {
  return (
    <div className="activity-bar">

      {/* Mobile toggle - only visible on mobile */}
      <div className="icon toggle-mobile" onClick={toggleSidebar}>
        <i className="codicon codicon-layout-sidebar-left"></i>
      </div>

      {/* Other icons */}
      <div className="icon"><i className="codicon codicon-files"></i></div>
      <div className="icon"><i className="codicon codicon-search"></i></div>
      <div className="icon"><i className="codicon codicon-git-branch"></i></div>
      <div className="icon"><i className="codicon codicon-debug-alt"></i></div>
      <div className="icon"><i className="codicon codicon-comment-discussion-sparkle"></i></div>
    </div>
  )
}

export default ActivityBar;