import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                                           </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search"
                                        aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* Messages Dropdown Menu */}
                    <li className="nav-item dropdown">
                        
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            {/* ... (le reste du code reste inchangé) */}
                        </div>
                    </li>
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                       
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            {/* ... (le reste du code reste inchangé) */}
                        </div>
                    </li>
                    <li className="nav-item">
                       
                    </li>
                    <li className="nav-item">
                        
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
