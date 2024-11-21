import React from 'react';
import {Pizza} from "../../../types.ts";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../../app/hooks.ts";
import {deleteOnePizzaDIsh} from "../../../store/thunk/pizzaThunk.ts";

interface Props {
    pizza: Pizza;
}

const AdminPizzaItem: React.FC<Props> = ({pizza}) => {
    const dispatch = useAppDispatch();
    return (
        <div className='card'>
            <img src={pizza.image} alt={pizza.name} className='card-img' />
            <h1>Name: {pizza.name}</h1>
            <span>Price: {pizza.price}</span>

            <NavLink to={`/admin/editDish/${pizza.id}`}>edit</NavLink>
            <button className='btn btn-danger' type='submit' onClick={() => dispatch(deleteOnePizzaDIsh(pizza.id))}>delete</button>
        </div>
    );
};

export default AdminPizzaItem;