import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OrdersMutation} from "../../types.ts";
import {fetchOrders} from "../thunk/orderThunk.ts";

interface OrderInformation {
    order: OrdersMutation[];
    isLoading: boolean
}

const initialState: OrderInformation = {
    order: [],
    isLoading: false
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(
            fetchOrders.pending, (state) => {
                state.isLoading = true
                })
            .addCase(
                fetchOrders.fulfilled, (state, action: PayloadAction<OrdersMutation[]>) => {
                    state.isLoading = false
                    state.order = action.payload
                })
            .addCase(
                fetchOrders.rejected, (state) => {
                    state.isLoading = false
                }
            )
    }
})

export const ordersReducer = orderSlice.reducer