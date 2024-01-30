import React from 'react';
import LogoSidebar from './logo/LogoSidebar';
import ToggeMenu from './contenue_sidebar/ToggeMenu';
import Menu from './contenue_sidebar/Menu';

const Sidebar = () => {
    const dataTable = [
        { to: '/marque', text: 'Marque' },
        { to: '/categorie', text: 'Categorie' }
    ];

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <LogoSidebar />
                <br />
                {/* Sidebar Menu */}
                <div className="sidebar">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <ToggeMenu menuTitle="Insertion" menuIcon="fas fa-table" subItems={dataTable} />
                        <Menu menuTitle={"Statistiques"} menuIcon={"fas fa-table"} to={"/stat"} />
                        <Menu menuTitle={"Validation annonce"} menuIcon={"fas fa-table"} to={"/annonce"} />
                        <Menu menuTitle={"Se deconnecter"} menuIcon={"fas fa-power-off"} to={"/logout"} />
                    </ul>
                </div>
                {/* /.sidebar-menu */}
            </aside>
        </>
    );
};

export default Sidebar;
