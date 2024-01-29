import React, { useState, useEffect } from 'react';
import Tools from '../Tools';
import ListCategorie from '../contenue_Categorie/ListCategorie';
import Field from '../Field';

const FrameCategorie = () => {
    const token = sessionStorage.getItem("token");
    const [categorie, setCategorie] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const categories = {
            "nom":categorie,
        }
        
        try {
            const response = await fetch('https://e-vehicule-production-c2e4.up.railway.app/categories/', {
                headers: {
                    'Authorization':`Bearer ${token}`,
                    'Content-Type':'application/json',
                },
                method: 'POST',
                body: JSON.stringify(categories)
            });
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
                                <h3 className="card-title">Liste categorie</h3>
                                <Tools />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-4">
                                        <ListCategorie />
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-4">
                                        <form onSubmit={handleSubmit}>
                                            <Field libelle="Categorie" type="text" onChange={(e) => setCategorie(e.target.value)} value={categorie} placeholder="Ajouter categorie" />
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

export default FrameCategorie;