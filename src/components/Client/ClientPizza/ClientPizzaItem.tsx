import React from 'react';
import {Pizza} from "../../../types.ts";
import {useAppDispatch} from "../../../app/hooks.ts";
import {addPizzaToCart} from "../../../store/slice/cartSlice.ts";

interface Props {
    pizza: Pizza
}

const ClientPizzaItem: React.FC<Props> = ({pizza}) => {
    const dispatch = useAppDispatch()
    return (
        <button onClick={() => dispatch(addPizzaToCart(pizza))}>
            <div className='card'>
                <img src={pizza.image} alt={pizza.name} className='card-img' />
                <h1>Name: {pizza.name}</h1>
                <span>Price: {pizza.price}</span>
            </div>
        </button>
    );
};

export default ClientPizzaItem;