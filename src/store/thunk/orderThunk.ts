import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {ApiOrders, OrdersMutation, PizzaCart} from "../../types.ts";

export const fetchOrders = createAsyncThunk<OrdersMutation[], void>(
    'orders/fetchOrders',
    async() => {
        const response: {data: ApiOrders | null} = await axiosApi.get<ApiOrders | null>('/orders.json');
        const ordersList = response.data

        if (ordersList === null) return [];


        const addedOrder: OrdersMutation[] = Object.keys(ordersList).map((orderId) => {
            const order = {...ordersList[orderId]}

            return {
                id: orderId,
                 ...order,
            };
        });

        return addedOrder
    }
)

export const sendOrders = createAsyncThunk<void, PizzaCart[]>(
    'orders/sendOrders',
    async(order) => {
        await axiosApi.post('/orders.json', {...order})
    }
)