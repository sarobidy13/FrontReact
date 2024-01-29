import React, { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ContentHeader from '../components/ContentHeader';
import Home from './Home';

const Dashboard = () => {
    const token = sessionStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            window.location.href = '/login';
        }
    }, [token]);
    return (
        <>
            <div class="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper" >
                    <ContentHeader text="Dashoard" />
                    <Home/>
                </div>
                
                <Footer />
            </div>

        </>
    );
};

export default Dashboard;