import React from 'react';
import './WorkspaceMenu.css'
import {WorkspaceTitle} from "../../../../components/WorkspaceTitle/WorkspaceTitle";
import {WorkspaceMenuItem} from "../../../../components/WorkspaceMenuItem/WorkspaceMenuItem";
import {BoardIcon} from "../../../../components/Icons/BoardIcon";
import {PersonIcon} from "../../../../components/Icons/PersonIcon";

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