const StatusBar = () => {
    return(
           <div className="status-bar">
            <div className="left">
                <div className="icon"><i className="codicon codicon-remote"></i></div>
                <div className="icon"><i className="codicon codicon-error"></i> 0</div>
                <div className="icon"><i className="codicon codicon-warning"></i> 0</div>
            </div>        
        <div className="right">React | Portfolio | Philippines</div>
      </div> 
    )
}

export default StatusBar;