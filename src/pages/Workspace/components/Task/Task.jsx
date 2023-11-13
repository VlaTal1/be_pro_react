import React from 'react';
import './Task.css'

export const Task = ({task}) => {
    return (
        <div className="task">
            <div className="task-name">{task.name}</div>
        </div>
    );
};