import React from 'react';
import {PizzaCart} from "../../../types.ts";
import {useAppDispatch} from "../../../app/hooks.ts";
import {removePizzaFromCart} from "../../../store/slice/cartSlice.ts";

interface Props {
    pizzaCart: PizzaCart;
}

const PizzaCartItem: React.FC<Props> = ({pizzaCart}) => {
    const dispatch = useAppDispatch()
    return (
        <div className='card'>
                <p>{pizzaCart.pizza.name}</p>
                <strong>{pizzaCart.amount}</strong>
                <p>{pizzaCart.pizza.price}</p>
                <button onClick={() => dispatch(removePizzaFromCart(pizzaCart.pizza.id))}>delete</button>
        </div>
    );
};

export default PizzaCartItem;