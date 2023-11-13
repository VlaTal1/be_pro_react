import React from 'react';
import './Home.css'
import {MainMenu} from "./components/MainMenu/MainMenu";
import {Workspaces} from "./components/Workspaces/Workspaces";

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
        <div className="home">
            <MainMenu workspaces={workspaces}/>
            <Workspaces workspaces={workspaces} title="YOUR WORKSPACES"/>
        </div>
    );
};