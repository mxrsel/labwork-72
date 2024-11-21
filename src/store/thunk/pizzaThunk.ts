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

export const getDishById = createAsyncThunk<ApiPizza | null, string>(
    'pizza/getDishById',
    async(pizzaId) => {
        const response = await axiosApi<ApiPizza | null>(`/pizza/${pizzaId}.json`);

        if(!response.data) return null;

        return response.data
    }
)

export const changePizza = createAsyncThunk<void, {pizzaId: string, pizza: ApiPizza}>(
    'pizza/changePizza',
    async({pizzaId, pizza}) => {
        await axiosApi.put(`/pizza/${pizzaId}.json`, {...pizza})
    }
)

export const deleteOnePizzaDish = createAsyncThunk(
    'pizza/deleteOnePizzaDIsh',
    async(pizzaId: string) => {
        await axiosApi.delete(`/pizza/${pizzaId}.json`)
    }
)