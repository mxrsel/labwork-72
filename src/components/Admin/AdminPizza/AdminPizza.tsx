import React from 'react';
import {Pizza} from "../../../types.ts";
import AdminPizzaItem from "./AdminPizzaItem.tsx";

interface Props {
    pizzas: Pizza[]
}

const AdminPizza: React.FC<Props> = ({pizzas}) => {
    return (
        <div>
            {pizzas.map((pizza)=> (
                <AdminPizzaItem pizza={pizza} />
            ))}
        </div>
    );
};

export default AdminPizza;