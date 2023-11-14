import React from 'react';
import './BoardCard.css';

export const BoardCard = ({ title, img = null, onClick }) => {
    return (
        <div className={`board-card ${img != null ? 'background' : ''}`} onClick={onClick}>
            <div
                className="board-card-content"
                style={{
                    backgroundImage: `url("${img}")`,
                    backgroundPosition: '50% 50%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {title}
            </div>
        </div>
    );
};