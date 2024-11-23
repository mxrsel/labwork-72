import React from 'react';
import {OrdersMutation} from "../../../types.ts";

interface Props {
    orders: OrdersMutation;
}

const OrdersItem: React.FC<Props> = ({orders}) => {

    if (!orders.orderInfo || !orders.orderInfo.pizza) {
        return <p>Invalid order data</p>;
    }

    return (
        <div>
            <div>
                <strong>{orders.orderInfo.amount}x
                    <p>{orders.orderInfo.pizza.name}</p>
                    <h3>{orders.orderInfo.pizza.price}</h3>
                </strong>
                Delivery: 150 som
            </div>
        </div>
    );
};

export default OrdersItem;