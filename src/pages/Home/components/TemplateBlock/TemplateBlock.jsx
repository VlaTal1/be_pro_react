import React from 'react';
import './TemplateBlock.css'
import {BoardCard} from "../BoardCard/BoardCard";

export const TemplateBlock = ({template}) => {
    return (
        <div className="template-block">
            <h1 className="title">{template.name}</h1>
            <div className="template-block-cards">
                {template.boards.map((board) => (
                    <BoardCard title={board.title} img={board.img}/>
                ))}
            </div>
        </div>
    );
};