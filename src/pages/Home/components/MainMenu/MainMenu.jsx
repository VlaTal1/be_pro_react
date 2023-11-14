import React, {useState} from 'react';
import './MainMenu.css'
import {WorkspaceMenuItem} from "../../../../components/WorkspaceMenuItem/WorkspaceMenuItem";
import {BoardIcon} from "../../../../components/Icons/BoardIcon";
import {TemplatesIcon} from "../../../../components/Icons/TemplatesIcon";
import {WorkspaceTitle} from "../../../../components/WorkspaceTitle/WorkspaceTitle";
import {Link} from "react-router-dom";
import {LinesIcon} from "../../../../components/Icons/LinesIcon";

export const MainMenu = ({workspaces, itemOnClick}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("boards")

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleActiveItem = (itemName) => {
        setActiveItem(itemName)
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <aside className={`main-menu ${isMenuOpen ? 'open' : 'close'}`}>
            <div className="burger-menu" onClick={toggleMenu}>
                <LinesIcon/>
            </div>
            <nav>
                <ul className="main-menu-header">
                    <li><WorkspaceMenuItem icon={<BoardIcon/>} title="Boards" isActive={activeItem === "boards"} onClick={() => {
                        itemOnClick("boards")
                        handleActiveItem("boards")
                    }}/></li>
                    <li><WorkspaceMenuItem icon={<TemplatesIcon/>} title="Templates" isActive={activeItem === "templates"} onClick={() => {
                        itemOnClick("templates")
                        handleActiveItem("templates")
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