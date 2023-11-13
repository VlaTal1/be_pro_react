import React from 'react';
import './Columns.css'
import {Column} from "../Column/Column";
import {AddNewColumn} from "../AddNewColumn/AddNewColumn";

export const Columns = ({columns}) => {
    return (
        <div className="columns">
            {columns.map((column) => (
                <Column column={column}/>
            ))}
            <AddNewColumn />
        </div>
    );
};