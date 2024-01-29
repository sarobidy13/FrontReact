import React, {useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentHeader from '../components/ContentHeader';
import Footer from '../components/Footer';
import FrameCategorie from '../components/contenue_Categorie/FrameCategorie';

const Categorie = () => {
    const token = sessionStorage.getItem('token');
    useEffect(() => {
        /*if (!token) {
            window.location.href = '/login';
        }*/
    }, [token]);
    return (
        <>
            <div class="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper" >
                    <ContentHeader text="CATEGORIE"/>
                    <FrameCategorie />
                </div>
                <Footer />
            </div>

        </>
    );
};

export default Categorie;