import React, {useState} from 'react';
import './Columns.css'
import {Column} from "../Column/Column";
import {AddNewColumn} from "../AddNewColumn/AddNewColumn";
import {ArrowLeftIcon} from "../../../../components/Icons/ArrowLeftIcon";
import {ArrowRightIcon} from "../../../../components/Icons/ArrowRightIcon";

export const Columns = ({columns}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex !== columns.length - 4) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % columns.length);
        }
    };

    const prevSlide = () => {
        if (currentIndex !== 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + columns.length) % columns.length);
        }
    };


    return (
        <div className="columns">
            <div className="columns-top">
                <div className="columns-buttons">
                    <div className={`columns-left-icon ${currentIndex === 0 ? "disabled" : ""}`} onClick={prevSlide}>
                        <ArrowLeftIcon/>
                    </div>
                    <div className={`columns-right-icon ${currentIndex === columns.length - 4 ? "disabled" : ""}`} onClick={nextSlide}>
                        <ArrowRightIcon/>
                    </div>
                </div>
                <AddNewColumn/>
            </div>
            <div className="slider">
                {columns.slice(currentIndex, currentIndex + 4).map((column, index) => (
                    <div key={index} className="slider-item">
                        <Column column={column}/>
                    </div>
                ))}
            </div>
        </div>
    );
};