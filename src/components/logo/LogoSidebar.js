import React from 'react';
import { Link } from 'react-router-dom';

const LogoSidebar = () => {
    return (
        <>
            <Link to="/" className="brand-link" >
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    style={{ opacity: 0.8 }} />
                <span className="brand-text font-weight-light">Admin</span>
            </Link>
        </>
    );
};

export default LogoSidebar;