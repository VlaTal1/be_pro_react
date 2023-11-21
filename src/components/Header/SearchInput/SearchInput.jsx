import React from "react";
import './SearchInput.css';

export const SearchInput = ({placeholder, type = "text", onChange}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} className="search-input" onChange={onChange}></input>
        </div>
    );
};
