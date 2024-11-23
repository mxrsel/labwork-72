import {configureStore} from "@reduxjs/toolkit";
import {pizzaReducer} from "../store/slice/pizzaSlice.ts";
import {pizzaCartReducer} from "../store/slice/cartSlice.ts";
import {ordersReducer} from "../store/slice/orderSlice.ts";

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        cart: pizzaCartReducer,
        order: ordersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;