import React from 'react';
import {SearchInput} from "../../../../components/Header/SearchInput/SearchInput";
import './RegistrationPanel.css'
import {useState} from "react";
import anime from 'animejs/lib/anime.es.js';

export const RegistrationPanel = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const nameSurnameRegex = /^[A-Za-z-' ]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^\+\d{1,2}\d{10}$/;

    const handleSignUp = (e) => {
        if (
            !nameSurnameRegex.test(name) ||
            !nameSurnameRegex.test(surname) ||
            !passwordRegex.test(password) ||
            !emailRegex.test(email) ||
            !phoneRegex.test(phone)
        ) {
            e.preventDefault();
            anime({
                targets: '.registration-button',
                backgroundColor: '#ff4d4d',
                translateX: [-5, 5],
                duration: 200,
                easing: 'easeInOutQuad',
                direction: 'alternate',
                complete: () => {
                    anime({
                        targets: '.registration-button',
                        backgroundColor: '#393583',
                        translateX: 0,
                    });
                },
            });
            return;
        }
    };

    return (
        <div className="registration-panel">
            <div className="registration-header">REGISTRATION</div>
            <form className="registration-content">
                <div className={`registration-item ${!nameSurnameRegex.test(name) ? 'invalid' : ''}`}>
                    <div className="registration-item-label">Name</div>
                    <SearchInput
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                </div>
                <div className={`registration-item ${!nameSurnameRegex.test(surname) ? 'invalid' : ''}`}>
                    <div className="registration-item-label">Surname</div>
                    <SearchInput
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        placeholder="Surname"
                    />
                </div>
                <div className={`registration-item ${!passwordRegex.test(password) ? 'invalid' : ''}`}>
                    <div className="registration-item-label">Password</div>
                    <SearchInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                    />
                </div>
                <div className={`registration-item ${!emailRegex.test(email) ? 'invalid' : ''}`}>
                    <div className="registration-item-label">Email</div>
                    <SearchInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className={`registration-item ${!phoneRegex.test(phone) ? 'invalid' : ''}`}>
                    <div className="registration-item-label">Phone</div>
                    <SearchInput
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                    />
                </div>
                <button className="registration-button" onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
            <div className="registration-footer">
            </div>
        </div>
    );
};