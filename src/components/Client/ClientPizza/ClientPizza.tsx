import React from 'react';
import {Pizza} from "../../../types.ts";
import ClientPizzaItem from "./ClientPizzaItem.tsx";

interface Props {
    pizzas: Pizza[]
}

const ClientPizza: React.FC<Props> = ({pizzas}) => {
    return (
        <div>
            {pizzas.map((pizza)=> (
                <ClientPizzaItem key={pizza.id} pizza={pizza} />
            ))}
        </div>
    );
};

export default ClientPizza;