import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import AdminDishesList from "./containers/admin/AdminDishesList/AdminDishesList.tsx";
import NewPizza from "./containers/admin/NewPizza/NewPizza.tsx";
import AdminMainPage from "./containers/admin/AdminMainPage/AdminMainPage.tsx";
import AdminEditDish from "./components/Admin/AdminEditDish/AdminEditDish.tsx";
import MainPage from "./containers/client/MainPage/MainPage.tsx";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path='/admin' element={<AdminMainPage />}/>
                    <Route path='/admin/dishes' element={<AdminDishesList />}/>
                    <Route path='/admin/newPizza' element={<NewPizza />}/>
                    <Route path='/admin/editDish/:pizzaId' element={<AdminEditDish />} />
                </Routes>
            </Layout>
        </>
    );
};

export default App;