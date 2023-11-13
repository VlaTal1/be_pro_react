import React from 'react';
import {DotsHorizontalIcon} from "../../../../components/Icons/DotsHorizontalIcon";
import {Task} from "../Task/Task";
import './Column.css'
import {PlusIcon} from "../../../../components/Icons/PlusIcon";

export const Column = ({column}) => {
    return (
        <div className="column">
            <div className="column-header">
                <div className="column-name">{column.name}</div>
                <DotsHorizontalIcon/>
            </div>
            <div className="tasks">
                {column.tasks.map((task) => (
                    <Task task={task}/>
                ))}
                <div className="new-task">
                    <PlusIcon/>
                    <p>Add new task</p>
                </div>
            </div>
        </div>
    );
};