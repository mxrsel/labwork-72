import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pizza, PizzaCart} from "../../types.ts";

interface Props {
    pizzasCart: PizzaCart[];
}

const initialState: Props = {
    pizzasCart: [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPizzaToCart: (state, { payload: pizza }: PayloadAction<Pizza>) => {
            const indexPizza = state.pizzasCart.findIndex(
                (pizzaCart) => pizzaCart.pizza.id === pizza.id
            );

            if (indexPizza !== -1) {
                state.pizzasCart[indexPizza].amount += 1;
            } else {
                state.pizzasCart.push({ pizza, amount: 1 });
            }
        },
        clearPizzaCart: (state) => {
            state.pizzasCart = []
        },
        updatePizza: (state, {payload: pizzas}: PayloadAction<Pizza[]>) => {
            state.pizzasCart = state.pizzasCart.map((pizzaCart) => {
                const updatePizza = pizzas.find(pizza => pizza.id === pizzaCart.pizza.id);

                if (updatePizza) {
                    return {
                        ...pizzaCart,
                        pizza: updatePizza,
                    }
                }

                return pizzaCart;
            })
        }
    }
})

export const pizzaCartReducer = cartSlice.reducer;
export const {
    addPizzaToCart,
    clearPizzaCart,
    updatePizza
} = cartSlice.actions