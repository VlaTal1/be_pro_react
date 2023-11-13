import React from 'react';
import './WorkspaceMenu.css'
import {WorkspaceTitle} from "../WorkspaceTitle/WorkspaceTitle";
import {WorkspaceMenuItem} from "../WorkspaceMenuItem/WorkspaceMenuItem";
import {BoardIcon} from "../Icons/BoardIcon";
import {PersonIcon} from "../Icons/PersonIcon";

export const WorkspaceMenu = ({workspace}) => {
    return (
        <div className="workspace-menu">
            <div className="workspace-menu-header">
                <WorkspaceTitle title={workspace.title} onClick={() => {
                }}/>
            </div>
            <nav>
                <ul className="workspace-menu-items">
                    <li>
                        <WorkspaceMenuItem icon={<BoardIcon/>} title="Boards" isActive={false} onClick={() => {
                        }}/>
                    </li>
                    <li>
                        <WorkspaceMenuItem icon={<PersonIcon/>} title="Members" isActive={false} onClick={() => {
                        }}/>
                    </li>
                </ul>
            </nav>
        </div>
    );
};