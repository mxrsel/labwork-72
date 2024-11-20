import React from 'react';
import {Pizza} from "../../../types.ts";

interface Props {
    pizza: Pizza;
}

const AdminPizzaItem: React.FC<Props> = ({pizza}) => {
    return (
        <div className='card'>
            <img src={pizza.image} alt={pizza.name} className='card-img' />
            <h1>{pizza.price}</h1>
            <span>{pizza.price}</span>
        </div>
    );
};

export default AdminPizzaItem;