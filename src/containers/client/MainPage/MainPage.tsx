import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {useCallback, useEffect, useState} from "react";
import {fetchPizza} from "../../../store/thunk/pizzaThunk.ts";
import Spinner from "../../../components/UI/Spinner/Spinner.tsx";
import ClientPizza from "../../../components/Client/ClientPizza/ClientPizza.tsx";
import PizzaCart from "../../../components/Client/pizzaCart/pizzaCart.tsx";
import Modal from "../../../components/UI/Modal/Modal.tsx";



const MainPage = () => {
    const dispatch = useAppDispatch();
    const pizza = useAppSelector((state) => state.pizza.pizzas);
    const loading = useAppSelector((state) => state.pizza.isLoading);
    const [showModal, setShowModal] = useState<boolean>(false)


    const fetchingPizzaData = useCallback(async () => {
        await dispatch(fetchPizza())
    }, [dispatch]);

    useEffect(() => {
        void fetchingPizzaData()
    }, [fetchingPizzaData]);

    return (
        <>
                <h1 className='text-dark text-center mt-3'>Dishes</h1>
            {loading ? <Spinner />
                :
                <div className="container mt-4">
                    {pizza.length > 0 ?
                        <ClientPizza pizzas={pizza} />
                        :
                        <p>No Pizza yet</p>
                    }
                </div>
            }
            <h1>Total: </h1>
            <button onClick={() => setShowModal(true)}>Checkout</button>
            <div>
                <Modal show={showModal} closeModal={() => setShowModal(false)} title='Order'>
                    <PizzaCart />
                </Modal>
            </div>
        </>
    );
};

export default MainPage;