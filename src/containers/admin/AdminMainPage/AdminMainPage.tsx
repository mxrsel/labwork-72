import {NavLink} from "react-router-dom";

const AdminMainPage = () => {
    return (
        <div>
            <NavLink className='btn btn-dark' to='/admin/dishes'>Dishes</NavLink>
            <NavLink className='btn btn-dark' to='/admin/orders'>Orders</NavLink>
        </div>
    );
};

export default AdminMainPage;