import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {useCallback, useEffect} from "react";
import {fetchPizza} from "../../../store/thunk/pizzaThunk.ts";
import Spinner from "../../../components/UI/Spinner/Spinner.tsx";
import AdminPizza from "../../../components/Admin/AdminPizza/AdminPizza.tsx";
import {NavLink} from "react-router-dom";

const AdminDishesList = () => {
    const dispatch = useAppDispatch();
    const pizzas = useAppSelector(state => state.pizza.pizzas);
    const loading = useAppSelector((state) => state.pizza.isLoading);


    const fetchingPizzaData = useCallback(async () => {
        await dispatch(fetchPizza())
    }, [dispatch]);

    useEffect(() => {
        void fetchingPizzaData()
    }, [fetchingPizzaData]);
    return (
        <>
            <header className='d-flex justify-content-between align-items-center mt-4'>
                <h1 className='text-dark'>Dishes</h1>
                <NavLink className='btn btn-dark' to='/admin/newPizza'>Add New Dish</NavLink>
            </header>
            {loading ? <Spinner />
                :
            <div className="container mt-4">
                {pizzas.length > 0 ?
                <AdminPizza pizzas={pizzas} />
                    :
                    <p>No Pizza yet</p>
                }
            </div>
            }
        </>
    );
};

export default AdminDishesList;