import React, { useState, useEffect } from 'react';

const ListAnnonce = () => {
    const [annonceData, setAnnonceData] = useState([]);
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!token) {
                    window.location.href = '/login';
                }

                const response = await fetch('https://webservice-production-4a2c.up.railway.app/annonces/nonvalide', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    setAnnonceData(data.data);
                } else {
                    alert(JSON.stringify(data));

                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, [token]);

    const fecthId = async (annonceId) => {
        try {
            if (!token) {
                window.location.href = '/login';
            }
    
            const response = await fetch(`https://webservice-production-4a2c.up.railway.app/annonces/${annonceId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
    
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };
    
    const update = async (annonceId) => {
        try {
            if (!token) {
                window.location.href = '/login';
            }
    
            const getById = await fecthId(annonceId);
            const updatedData = { ...getById, estValide: 1 };
    
            const response = await fetch(`https://webservice-production-4a2c.up.railway.app/annonces/${annonceId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
    
            if (response.ok) {
                console.log("Mise à jour réussie !");
                window.location.reload();
            } else {
                alert("Erreur lors de la mise à jour : " + JSON.stringify(response));
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour des données:', error);
        }
    };
    
    const handleValidation = async (annonceId) => {
        update(annonceId);
    };
    
    
    

    return (
      
        <div className="container mt-4">
            {annonceData.length > 0 ? (
                <div>
                    {annonceData.map((annonce) => (
                        <div key={annonce.id} className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="mr-3">
                                        <img
                                            src={annonce.image}
                                            alt={annonce.titre}
                                            style={{ maxWidth: '150px', maxHeight: '100px' }}
                                        />
                                    </div>
                                    <div>
                                        <p className="card-text">Titre: {annonce.titre}</p>
                                        <p className="card-text">Description: {annonce.description}</p>
                                        <p className="card-text">Catégorie: {annonce.categorie}</p>
                                        <p className="card-text">Marque: {annonce.marque}</p>
                                        <p className="card-text">Prix: {annonce.prix}</p>
                                        <p className="card-text">Date d'Ajout: {annonce.dateAjout}</p>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={() => handleValidation(annonce.id)}
                                >
                                    Valider
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Aucune</p>
            )}
        </div>
    );
};

export default ListAnnonce;
