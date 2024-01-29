import React, { useState, useEffect } from 'react';
import Tools from '../Tools';
import ListMarque from './ListMarque';
import Field from '../Field';

const FrameMarque = () => {
    const token = sessionStorage.getItem("token");
    const [marque, setMarque] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const marques = {
            "nom":marque,
        }
        
        try {
            const response = await fetch('https://e-vehicule-production-c2e4.up.railway.app/marques/', {
                headers: {
                    'Authorization':`Bearer ${token}`,
                    'Content-Type':'application/json',
                },
                method: 'POST',
                body: JSON.stringify(marques)
            }
            );
            
        } catch (error) {
            console.error('Erreur pendant la requête:', error);
            alert('Une erreur s\'est produite.');
        }
    };

    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Liste marque</h3>
                                <Tools />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-4">
                                        <ListMarque />
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-4">
                                        <form onSubmit={handleSubmit}>
                                            <Field libelle="Marque" type="text" onChange={(e) => setMarque(e.target.value)} value={marque} placeholder="Ajouter marque" />
                                            <button type="submit" className="btn btn-primary">
                                                Ajouter
                                            </button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrameMarque;