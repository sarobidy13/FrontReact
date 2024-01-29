import { useEffect } from 'react';

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    useEffect(() => {
        handleLogout();
    }, []);

    return null;
};

export default Logout;