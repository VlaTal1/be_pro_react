import React from 'react';
import './Header.css'
import img from '../../images/ava.jpeg'
import {Logo} from "../Icons/Logo";
import {SearchInput} from "../SearchInput/SearchInput";
import {Avatar} from "../Avatar/Avatar";

export const Header = () => {
    return (
        <header>
            <Logo/>
            <div className="header-right-side">
                <SearchInput/>
                <Avatar img={img}/>
            </div>
        </header>
    );
};
