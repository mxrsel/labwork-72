import React from 'react';
import {PizzaCart} from "../../../types.ts";
import PizzaCartItem from "./pizzaCartItem.tsx";

interface Props {
    pizzasCart: PizzaCart[]
}

const PizzasCartList: React.FC<Props> = ({pizzasCart}) => {
    const total = pizzasCart.reduce((acc, pizzasCart) => {
        acc = acc + pizzasCart.pizza.price * pizzasCart.amount + 120;
        return acc
    }, 0);

    let cartList = (
        <h1>Empty Cart! Add something</h1>
    )

    if (pizzasCart.length > 0) {
         cartList = (
            <>
                {pizzasCart.map((pizzaCart) => (
                    <PizzaCartItem key={pizzaCart.pizza.id} pizzaCart={pizzaCart} />
                ))}
                <hr/>

                <div>
                    <h2>Delivery: 120 som</h2>
                    <strong>Total: {total} som</strong>
                </div>
            </>
        )
    }

    return (
        <div>
            {cartList}
        </div>
    );
};

export default PizzasCartList;