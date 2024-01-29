import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ToggeMenu = ({ menuTitle, menuIcon, subItems }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <li className={`nav-item has-treeview ${isMenuOpen ? 'menu-open' : ''}`}>
            <Link onClick={toggleMenu} className="nav-link" >
                <i className={`nav-icon ${menuIcon}`}></i>
                <p>
                    {menuTitle}
                    <i className="fas fa-angle-left right"></i>
                </p>
            </Link>

            <ul className="nav nav-treeview">
                {subItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <Link to={item.to} className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>{item.text}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};
export default ToggeMenu;