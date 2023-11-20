import React from 'react';
import './WorkspaceMenuItem.css'

export const WorkspaceMenuItem = ({title, icon, isActive, onClick}) => {
    return (
        <div className={`workspace-menu-item ${isActive && 'active'}`} onClick={onClick}>
            {icon && icon}
            <div className="workspace-menu-item-title">
                {title}
            </div>
        </div>
    );
};