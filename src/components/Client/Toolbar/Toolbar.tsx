import {NavLink} from "react-router-dom";

const Toolbar = () => {

    return (
        <div className='navbar container bg-dark mt-3 ps-3 pe-3' style={{borderRadius: '10px'}}>
            <NavLink to='/' className='navbar-brand text-light'>Turtle Pizza</NavLink>
        </div>
    );
};

export default Toolbar;