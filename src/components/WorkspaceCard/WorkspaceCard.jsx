import React from 'react';
import './WorkspaceCard.css'
import {BoardCard} from "../BoardCard/BoardCard";
import {WorkspaceTitle} from "../WorkspaceTitle/WorkspaceTitle";

export const WorkspaceCard = ({workspace}) => {
    return (
        <div className="workspace-card">
            <WorkspaceTitle title={workspace.title} />
            <div className="cards">
                {workspace.boards.map((board) => (
                    <BoardCard title={board.title}/>
                ))}
            </div>
        </div>
    );
};