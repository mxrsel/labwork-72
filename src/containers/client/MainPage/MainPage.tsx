import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {useCallback, useEffect} from "react";
import {fetchPizza} from "../../../store/thunk/pizzaThunk.ts";
import Spinner from "../../../components/UI/Spinner/Spinner.tsx";
import ClientPizza from "../../../components/Client/ClientPizza/ClientPizza.tsx";

const MainPage = () => {
    const dispatch = useAppDispatch();
    const pizza = useAppSelector((state) => state.pizza.pizzas);
    const loading = useAppSelector((state) => state.pizza.isLoading);


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
        </>
    );
};

export default MainPage;