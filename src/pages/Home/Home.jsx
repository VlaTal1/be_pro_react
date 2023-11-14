import React from 'react';
import './Home.css'
import {MainMenu} from "./components/MainMenu/MainMenu";
import {Workspaces} from "./components/Workspaces/Workspaces";
import {BoardCard} from "./components/BoardCard/BoardCard";
import pd from '../../images/templates/project_design.png'

export const Home = () => {
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

    return (
        <main className="home">
            {/*<MainMenu workspaces={workspaces}/>*/}
            {/*<Workspaces workspaces={workspaces} title="YOUR WORKSPACES"/>*/}
            <BoardCard title={"Project Design"} img={pd}/>
        </main>
    );
};