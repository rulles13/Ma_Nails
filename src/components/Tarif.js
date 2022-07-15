import React from 'react'

const Tarif = () => {

    const prestations = [
        {
            "soin": "Vernis semi permanent",
            "prix": "25 €"
        },
        {
            "soin": "Retouche",
            "prix": "3,5 €"
        },
        {
            "soin": "Déposse",
            "prix": "10 €"
        },
    ]

    return (
        <div className='tarif'>
            <button className='btn-red'> Tarif </button>
        {prestations.map((presta) => (
            <li>{presta.soin}</li>
        ))}
        </div>
    )
}

export default Tarif