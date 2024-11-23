import React from 'react';
import {OrdersMutation} from "../../../types.ts";
import OrdersItem from "./OrdersItem.tsx";

interface Props {
    orders: OrdersMutation[]
}

const Orders: React.FC<Props> = ({orders}) => {

    return (
        <div>
            {orders.map((order) => (
                <OrdersItem key={order.orderInfo.pizza.id} orders={order} />
            ))}
        </div>
    );
};

export default Orders;