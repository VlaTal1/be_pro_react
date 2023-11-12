import React from 'react';
import './MainMenu.css'
import {WorkspaceMenuItem} from "../WorkspaceMenuItem/WorkspaceMenuItem";
import {BoardIcon} from "../Icons/BoardIcon";
import {TemplatesIcon} from "../Icons/TemplatesIcon";
import {WorkspaceTitle} from "../WorkspaceTitle/WorkspaceTitle";

export const MainMenu = ({workspaces}) => {
    return (
        <nav className={"main-menu"}>
            <ul className="main-menu-header">
                <li><WorkspaceMenuItem icon={<BoardIcon/>} title="Boards" isActive={true} onClick={() => {}}/></li>
                <li><WorkspaceMenuItem icon={<TemplatesIcon/>} title="Templates" isActive={false} onClick={() => {}}/></li>
            </ul>
            <div className="main-menu-bottom">
                <div className="main-menu-bottom-title">Workspaces</div>
                <ul className="main-menu-workspaces">
                    {workspaces.map((item) => {
                        return <WorkspaceTitle title={item.title} onClick={() => {}}/>
                    })}
                </ul>
            </div>
        </nav>
    );
};