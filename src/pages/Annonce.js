import React, {useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentHeader from '../components/ContentHeader';
import Footer from '../components/Footer';

const Annonce = () => {
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
                    <ContentHeader text="ANNONCE"/>
                    
                </div>
                <Footer />
            </div>

        </>
    );
};

export default Annonce;