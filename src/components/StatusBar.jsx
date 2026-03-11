const StatusBar = () => {
    return(
           <div className="status-bar">
            <div className="left">
                <div className="icon"><i className="codicon codicon-remote"></i></div>
                <div className="icon"><i className="codicon codicon-repo"></i>krizia-bianca</div>
                <div className="icon"><i className="codicon codicon-git-branch"></i>main</div>
                <div className="icon"><i className="codicon codicon-error"></i> 0 <i className="codicon codicon-warning"></i> 0 </div>
            </div>        
        <div className="right"><a href="https://www.linkedin.com/in/kbafadriquela">LinkedIn</a> | <a href="https://github.com/kbafadriquela">Github</a> | <a href="https://meowpress.dev">Meowpress.dev</a></div>
      </div> 
    )
}

export default StatusBar;