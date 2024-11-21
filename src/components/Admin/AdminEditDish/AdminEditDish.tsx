import {useCallback, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {changePizza, getDishById} from "../../../store/thunk/pizzaThunk.ts";
import {ApiPizza} from "../../../types.ts";
import AdminForm from "../AdminForm/AdminForm.tsx";

const AdminEditDish = () => {
    const {pizzaId} = useParams();
    const dispatch = useAppDispatch();
    const pizza = useAppSelector((state) => state.pizza.onePizza);
    const loading = useAppSelector((state) => state.pizza.isLoading);
    const navigate = useNavigate();

    const changePizzaById = useCallback(async() => {
        if(pizzaId) {
            dispatch(getDishById(pizzaId))
        }
    }, [dispatch, pizzaId])

    useEffect(() => {
        void changePizzaById()
    }, [changePizzaById]);

    const editPizza = async(pizza: ApiPizza) => {
        if(pizzaId) {
            await dispatch(changePizza({pizzaId: pizzaId, pizza}));
            navigate('/admin/dishes')
        }
    }
    return pizza &&(
        <div>
            <AdminForm addNewPizza={editPizza} existingPizza={pizza} isLoading={loading} />
        </div>
    );
};

export default AdminEditDish;