import {useAppSelector} from "../../../app/hooks.ts";
import PizzasCartList from "./pizzasCartList.tsx";

const PizzaCart = () => {
    const pizzasCart = useAppSelector((state) => state.cart.pizzasCart);
    return (
        <>
                <PizzasCartList pizzasCart={pizzasCart} />
        </>
    );
};

export default PizzaCart;