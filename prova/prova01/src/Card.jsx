import React from 'react';

const Card = (props) => {
    return <div className='card'>
        <h1>{props.pessoa.nome}</h1>
        <p>Contamos com sua presença!</p>
        <h2>{props.pessoa.telefone}</h2>
    </div>
};


export default Card;