import React from 'react';
import {PizzaCart} from "../../../types.ts";

interface Props {
    pizzaCart: PizzaCart;
}

const PizzaCartItem: React.FC<Props> = ({pizzaCart}) => {
    return (
        <div className='card'>
                <p>{pizzaCart.pizza.name}</p>
                <strong>{pizzaCart.amount}</strong>
                <p>{pizzaCart.pizza.price}</p>
                <button>delete</button>
        </div>
    );
};

export default PizzaCartItem;