import React, { useState, useEffect } from 'react';

const ListCategorie = () => {
    const token = sessionStorage.getItem("token");
    const [listCategorie, setlistCategorie] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = new Headers();
                headers.append('Authorization', `Bearer ${token}`);
                const response = await fetch('https://e-vehicule-production-c2e4.up.railway.app/categories/', {
                    method: 'GET',
                    headers: {
                        'Authorization':`Bearer ${token}`,
                        'Content-Type':'application/json',
                    },
                });
                const datas = await response.json();
                console.log(datas);
                if (response.ok) {
                    setlistCategorie(datas.data);
                } else {
                    alert(datas.message);
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
        <>
            <table id="list_categorie" className="table table-bordered table-hover">
                <thead>
                    <th>Categories</th>
                </thead>
                <tbody>
                    {listCategorie.map((categorie) => (
                        <tr> <td>{categorie.nom}</td></tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListCategorie;