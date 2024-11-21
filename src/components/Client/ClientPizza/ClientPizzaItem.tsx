import React from 'react';
import {Pizza} from "../../../types.ts";

interface Props {
    pizza: Pizza
}

const ClientPizzaItem: React.FC<Props> = ({pizza}) => {
    return (
        <>
            <div className='card'>
                <img src={pizza.image} alt={pizza.name} className='card-img' />
                <h1>Name: {pizza.name}</h1>
                <span>Price: {pizza.price}</span>
            </div>
        </>
    );
};

export default ClientPizzaItem;