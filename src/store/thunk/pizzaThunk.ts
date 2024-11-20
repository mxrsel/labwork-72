import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {PizzaList} from "../../types.ts";

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
    async() => {
        const response = await axiosApi.get('pizza.json');
        const pizzaList = response.data

        if (pizzaList === null) return [];

        const pizzas: PizzaList = pizzaList;

        const newPizza = Object.keys(pizzaList).map((pizza) => {
            return {
                ...pizzas[pizza],
                id: pizza
            };
        });

        return newPizza
    }
)