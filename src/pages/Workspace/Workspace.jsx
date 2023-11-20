import React from 'react';
import './Workspace.css'
import {WorkspaceMenu} from "./components/WorkspaceMenu/WorkspaceMenu";
import {BoardHeader} from "./components/BoardHeader/BoardHeader";
import {Columns} from "./components/Columns/Columns";

export const Workspace = () => {
    const workspace = {
        title: "Study",
        boards: [
            {
                title: "JS",
                columns: [
                    {
                        name: "To do",
                        tasks: [
                            {name: "lb 4"},
                            {name: "lb 5"},
                            {name: "lb 6"},
                        ]
                    },
                    {
                        name: "Ready",
                        tasks: [
                            {name: "lb 1"},
                            {name: "lb 2"},
                        ]
                    },
                    {
                        name: "In dev",
                        tasks: [
                            {name: "lb 3"},
                        ]
                    },
                    {
                        name: "Ready",
                        tasks: [
                            {name: "lb 1"},
                            {name: "lb 2"},
                        ]
                    },
                    {
                        name: "Canceled",
                        tasks: [
                            {name: "lb 1"},
                            {name: "lb 2"},
                            {name: "lb 2"},
                        ]
                    },
                    {
                        name: "Not Important",
                        tasks: [
                            {name: "lb 1"},
                            {name: "lb 2"},
                            {name: "lb 2"},
                            {name: "lb 2"},
                        ]
                    },
                ]
            }
        ]
    }

    return (
        <div className="workspace">
            <div className="menu">
                <WorkspaceMenu workspace={workspace}/>
            </div>
            <div className="board">
                <BoardHeader title={workspace.boards[0].title}/>
                <div className="board-content">
                    <Columns columns={workspace.boards[0].columns}/>
                </div>
            </div>
        </div>
    );
};