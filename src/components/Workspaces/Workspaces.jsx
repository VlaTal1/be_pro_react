import React from 'react';
import './Workspaces.css'
import {WorkspaceCard} from "../WorkspaceCard/WorkspaceCard";

export const Workspaces = ({title, workspaces}) => {
    return (
        <div className="workspaces">
            <div className="workspaces-title">{title}</div>
            <div className="workspaces-content">
                {workspaces.map((workspace) => (
                    <WorkspaceCard workspace={workspace} />
                ))}
            </div>
        </div>
    );
};