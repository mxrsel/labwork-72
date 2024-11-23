import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {fetchOrders} from "../../../store/thunk/orderThunk.ts";
import Spinner from "../../../components/UI/Spinner/Spinner.tsx";
import Orders from "../../../components/Admin/Orders/Orders.tsx";

const AdminOrderList = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.order.order);
    const loading = useAppSelector((state) => state.order.isLoading);


    const fetchingOrdersData = useCallback(async () => {
        await dispatch(fetchOrders())
    }, [dispatch]);

    useEffect(() => {
        void fetchingOrdersData()
    }, [fetchingOrdersData]);

    return (
        <>
            {loading ? <Spinner />
                :
                <div className="container mt-4">
                    {orders.length > 0 ?
                        <Orders orders={orders} />
                        :
                        <p>No Pizza yet</p>
                    }
                </div>
            }
        </>
    );
};

export default AdminOrderList;