import React, { useState, useEffect } from 'react';
import "../../assets/styles/stat.css";

const FrameStatistique = () => {
    const token = sessionStorage.getItem("token");
    const [statData, setStatData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://webservice-production-4a2c.up.railway.app/annonces/statistique', {
                    method: 'GET',
                    headers: {
                        'Authorization':`Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const datas = await response.json();
                if (response.ok) {
                    setStatData(datas.data);
                } else {
                    console.error('Erreur lors de la récupération des données:', datas.error);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, [token]);

    return (
        <div className="simple-bar-chart">
            {statData.map((item, index) => (
                <div className="item" key={index}>
                    <div className="label">{item.categorie.nom}</div>
                    <div className="value">{item.effectif}%</div>
                </div>
            ))}
        </div>
    );
};

export default FrameStatistique;
