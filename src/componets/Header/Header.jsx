import React from "react";
import './Header.css'
import Logo from '../../assets/logo.png'
import Avatar from '../../assets/avatar.png'

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="logo netflix" className="logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src={Avatar} alt="" className="avatar" />
                </a>
            </div>
        </header>
    )
}