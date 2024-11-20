import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pizza} from "../../types.ts";
import {fetchPizza} from "../thunk/pizzaThunk.ts";

interface PizzaState {
    pizzas: Pizza[];
    isLoading: boolean;
}

const initialState: PizzaState = {
    pizzas: [],
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
                }
            )
    }
})

export const pizzaReducer = pizzaSlice.reducer;
