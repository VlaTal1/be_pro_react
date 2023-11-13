import React from 'react';
import './BoardHeader.css'

export const BoardHeader = ({title}) => {
    return (
        <div className="board-header">
            <h1 className="title">
                {title}
            </h1>
        </div>
    );
};
