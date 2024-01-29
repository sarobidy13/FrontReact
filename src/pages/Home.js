import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [marqueData, setMarqueData] = useState([]);
    const token = sessionStorage.getItem('token');

    console.log(token);
    useEffect(() => {
        if (!token) {
            window.location.href = '/login';
        }
        const fetchData = async () => {
            try {
                const headers = new Headers();
                headers.append('token', token);
                const response = await fetch('https://e-vehicule-production-c2e4.up.railway.app/marques/', {
                    method: 'GET',
                    headers: {
                        'Authorization':`Bearer ${token}`,
                        'Content-Type':'application/json',
                    },
                });
                const datas = await response.json();
                if (response.ok) {
                    setMarqueData(datas.data);
                } else {
                    alert(JSON.stringify(datas));
                    window.location.href = '/logout';
                }

                console.log(datas);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, [token]);


    return (
        <div className="container mt-4">
            {marqueData.length > 0 ? (
                <div>
                    {marqueData.map((marque) => (
                        <div key={marque.id} className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">ID Marque: {marque.id}</h5>
                                <p className="card-text">Marque: {marque.nom}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Chargement...</p>
            )}

            <Link to="/logout" >
                Déconnexion
            </Link>
        </div>
    );
};

export default Home;