
import React, { useEffect } from 'react';

const Logout = () => {
    const handleLogout = async () => {
        const token = sessionStorage.getItem("token");

        try {
            const response = await fetch('https://e-vehicule-production-c2e4.up.railway.app/utilisateurs/logout', {
                method: 'POST',
                headers: {
                    'Authorization':`Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('mi deconnecte eeeeee');
            } else {
                const responseData = await response.json();
                console.log(responseData.message);
                alert("Erreurrrrrrrrrrrr: " + responseData.message);
            }
        } catch (error) {
            console.error('Erreur pendant la requête:', error);
            alert('Une erreur s\'est produite.');
        }
        sessionStorage.removeItem('token');
        window.location.href = '/login';
    }

    handleLogout();

    return null;
};

export default Logout;
