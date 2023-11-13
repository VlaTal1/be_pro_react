import React from 'react';
import './Task.css'

export const Task = ({taskName}) => {
    return (
        <div className="task">
            <div className="task-name">{taskName}</div>
        </div>
    );
};