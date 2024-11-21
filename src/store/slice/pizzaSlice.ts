import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiPizza, Pizza} from "../../types.ts";
import {changePizza, createNewPizzaCard, fetchPizza, getDishById} from "../thunk/pizzaThunk.ts";

interface PizzaState {
    pizzas: Pizza[];
    onePizza: ApiPizza | null
    isLoading: boolean;
}

const initialState: PizzaState = {
    pizzas: [],
    onePizza: null,
    isLoading: false,
}

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchPizza.pending, (state) => {
                    state.isLoading = true
                })
            .addCase(fetchPizza.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
                state.isLoading = false
                state.pizzas = action.payload
            })
            .addCase(
                fetchPizza.rejected, (state) => {
                    state.isLoading = false
                })
            .addCase(
                createNewPizzaCard.pending, (state) => {
                    state.isLoading = true
                })
            .addCase(
                createNewPizzaCard.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(
                createNewPizzaCard.rejected, (state) => {
                    state.isLoading = false
                }
            )
            .addCase(
                getDishById.pending, (state) => {
                    state.isLoading = true
                })
            .addCase(
                getDishById.fulfilled, (state, action:PayloadAction<ApiPizza | null>) => {
                    state.isLoading = false
                    state.onePizza = action.payload
                })
            .addCase(
                getDishById.rejected, (state) => {
                    state.isLoading = false
                }
            )
            .addCase(
                changePizza.pending, (state) => {
                    state.isLoading = true
                })
            .addCase(
                changePizza.fulfilled, (state) => {
                    state.isLoading = false
                    state.onePizza = null
                })
            .addCase(
                changePizza.rejected, (state) => {
                    state.isLoading = false
                }
            )
    }
})

export const pizzaReducer = pizzaSlice.reducer;
