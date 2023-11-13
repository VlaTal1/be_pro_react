import React from 'react';
import './Header.css'
import img from '../../images/ava.jpeg'
import {Logo} from "../Icons/Logo";
import {SearchInput} from "./SearchInput/SearchInput";
import {Avatar} from "./Avatar/Avatar";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to='/'>
                <Logo/>
            </Link>
            <div className="header-right-side">
                <SearchInput/>
                <Avatar img={img}/>
            </div>
        </header>
    );
};
