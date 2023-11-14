import React, {useState} from 'react';
import './Home.css'
import {MainMenu} from "./components/MainMenu/MainMenu";
import {Workspaces} from "./components/Workspaces/Workspaces";
import kanban from '../../images/templates/kanban.png'
import agile from '../../images/templates/agile.png'
import scrum from '../../images/templates/scrum.png'
import game_development from '../../images/templates/game_development.png'
import project_design from '../../images/templates/project_design.png'
import system_design from '../../images/templates/system_design.png'
import game_design from '../../images/templates/game_design.png'
import design_sprint from '../../images/templates/design_sprint.png'
import {Templates} from "./components/Templates/Templates";

export const Home = () => {
    const [content, setContent] = useState("boards")

    const handleContent = (contentType) => {
        setContent(contentType)
    }

    const workspaces = [
        {
            title: "Study",
            boards: [
                {
                    title: "JS",
                },
                {
                    title: "Logic",
                },
                {
                    title: "OOP",
                },
                {
                    title: "NoSQL",
                },
                {
                    title: "Algorithms",
                },
            ]
        },
        {
            title: "Work",
            boards: [
                {
                    title: "JS",
                },
                {
                    title: "DB",
                },
                {
                    title: "Algorithms",
                },
            ]
        }
    ]

    const templates = [
        {
            name: "Engineering templates",
            boards: [
                {
                    title: "Kanban",
                    img: kanban,
                },
                {
                    title: "Agile",
                    img: agile,
                },
                {
                    title: "Scrum",
                    img: scrum
                },
                {
                    title: "Game development",
                    img: game_development,
                },
            ]
        },
        {
            name: "Design templates",
            boards: [
                {
                    title: "Project Design",
                    img: project_design,
                },
                {
                    title: "System Design",
                    img: system_design,
                },
                {
                    title: "Game Design",
                    img: game_design
                },
                {
                    title: "Design Sprint",
                    img: design_sprint,
                },
            ]
        },
    ]

    return (
        <main className="home">
            <MainMenu workspaces={workspaces} itemOnClick={handleContent}/>
            <div className="home-content">
                {content === "boards" && (
                    <Workspaces workspaces={workspaces} title="YOUR WORKSPACES"/>
                )}
                {content === "templates" && (
                    <Templates title="TEMPLATES" templates={templates}/>
                )}
            </div>
        </main>
    );
};