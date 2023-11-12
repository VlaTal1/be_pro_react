import React from 'react';
import './BoardCard.css'

export const BoardCard = ({title, onClick}) => {
    return (
        <div className='board-card' onClick={onClick}>
            {title}
        </div>
    );
};
