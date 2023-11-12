import React from "react";
import './WorkspaceTitle.css'

export const WorkspaceTitle = ({title}) => {
    return (
        <div className="workspace-title">
            <div className="workspace-icon">{title.substring(0, 1).toUpperCase()}</div>
            <div className="workspace-name">{title}</div>
        </div>
    );
};
