import React from 'react';
import './MainMenu.css'
import {WorkspaceMenuItem} from "../../../../components/WorkspaceMenuItem/WorkspaceMenuItem";
import {BoardIcon} from "../../../../components/Icons/BoardIcon";
import {TemplatesIcon} from "../../../../components/Icons/TemplatesIcon";
import {WorkspaceTitle} from "../../../../components/WorkspaceTitle/WorkspaceTitle";
import {Link} from "react-router-dom";

export const MainMenu = ({workspaces}) => {
    return (
        <aside className={"main-menu"}>
            <nav>
                <ul className="main-menu-header">
                    <li><WorkspaceMenuItem icon={<BoardIcon/>} title="Boards" isActive={true} onClick={() => {
                    }}/></li>
                    <li><WorkspaceMenuItem icon={<TemplatesIcon/>} title="Templates" isActive={false} onClick={() => {
                    }}/></li>
                </ul>
                <div className="main-menu-bottom">
                    <div className="main-menu-bottom-title">Workspaces</div>
                    <ul className="main-menu-workspaces">
                        {workspaces.map((item) => {
                            return (
                                <Link to='workspace/1/1'>
                                    <WorkspaceTitle title={item.title} onClick={() => {
                                    }}/>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </aside>
    );
};