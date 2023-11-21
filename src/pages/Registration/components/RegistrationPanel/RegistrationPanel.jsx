import React from 'react';
import {SearchInput} from "../../../../components/Header/SearchInput/SearchInput";
import './RegistrationPanel.css'
import {useState} from "react";

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

    return (
        <div className="registration-panel">
            <div className="registration-header">REGISTRATION</div>
            <div className="registration-content">
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
            </div>
            <div className="registration-footer">
                <button className="registration-button">
                    Sign Up
                </button>
            </div>
        </div>
    );
};