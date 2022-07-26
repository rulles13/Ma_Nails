import React from 'react'

const Tarif = () => {

    const prestations = [
        {
            "soin": "Ongles en gel",
            "prix": "20 €"
        },
        {
            "soin": "Vernis semi-permanent",
            "prix": "10 €"
        },
        {
            "soin": "Retouche",
            "prix": "3,5 €"
        },
        {
            "soin": "Déposse",
            "prix": "10 €"
        },
        {
            "soin": "Déplacement -10 km",
            "prix": "5 €"
        },
        {
            "soin": "Déplacement -20 km",
            "prix": "10 €"
        }
    ]

    return (
        <div id='tarif'>
            <h2>Tarif</h2>
        {prestations.map((presta, index) => (
            <li key={index}>{presta.soin} : {presta.prix}</li>
        ))}
        </div>
    )
}

export default Tarif