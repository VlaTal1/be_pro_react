import React from 'react';
import './AddNewColumn.css'
import {PlusIcon} from "../../../../components/Icons/PlusIcon";

export const AddNewColumn = () => {
    return (
        <div className="add-new-column">
            <PlusIcon/>
            <p>Add new column</p>
        </div>
    );
};