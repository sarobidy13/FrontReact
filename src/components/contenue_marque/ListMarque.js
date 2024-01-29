import React, { useState, useEffect } from 'react';

const ListMarque = () => {
    const token = sessionStorage.getItem("token");
    const [listMarque, setListMarque] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = new Headers();
                headers.append('Authorization', `Bearer ${token}`);
                const response = await fetch('https://e-vehicule-production-c2e4.up.railway.app/marques/', {
                    method: 'GET',
                    headers: {
                        'Authorization':`Bearer ${token}`,
                        'Content-Type':'application/json',
                    },
                });
                const datas = await response.json();
                console.log(datas);
                if (response.ok) {
                    setListMarque(datas.data);
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
            <table id="list_marque" className="table table-bordered table-hover">
                <thead>
                    <th>Marque</th>
                </thead>
                <tbody>
                    {listMarque.map((marque) => (
                        <tr> <td>{marque.nom}</td></tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListMarque;