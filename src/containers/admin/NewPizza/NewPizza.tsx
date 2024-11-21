import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {useNavigate} from "react-router-dom";
import {ApiPizza} from "../../../types.ts";
import {createNewPizzaCard} from "../../../store/thunk/pizzaThunk.ts";
import AdminForm from "../../../components/Admin/AdminForm/AdminForm.tsx";

const NewPizza = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.pizza.isLoading);
    const navigate = useNavigate();

    const createNewPizza = async(pizza: ApiPizza) => {
        await dispatch(createNewPizzaCard(pizza));
        navigate('/admin/dishes')
    }
    return (
        <div>
            <AdminForm addNewPizza={createNewPizza} isLoading={loading}/>
        </div>
    );
};

export default NewPizza;