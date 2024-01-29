import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ menuTitle, menuIcon, to }) => {
    return (
        <li className="nav-item">
            <Link to={to} className="nav-link">
                <i className={`nav-icon ${menuIcon}`}></i>
                <p>
                    {menuTitle}
                </p>
            </Link>
        </li>
    );
};

export default Menu;