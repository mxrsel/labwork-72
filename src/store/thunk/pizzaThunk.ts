import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {ApiPizza, Pizza, PizzaList} from "../../types.ts";

export const fetchPizza = createAsyncThunk<Pizza[], void>(
    'pizza/fetchPizza',
    async() => {
        const response: {data: PizzaList | null} = await axiosApi.get('/pizza.json');
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

export const createNewPizzaCard = createAsyncThunk<void, ApiPizza>(
    'pizza/createNewPizzaCard',
    async(pizza) => {
        await axiosApi.post('/pizza.json', {...pizza})
    }
)