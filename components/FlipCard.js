"use client";

import { useState } from "react";

export const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flip-card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {frontContent}
                </div>
                <div className="flip-card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
};