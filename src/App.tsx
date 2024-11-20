import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import AdminDishesList from "./containers/admin/AdminDishesList/AdminDishesList.tsx";
import NewPizza from "./containers/admin/NewPizza/NewPizza.tsx";
import AdminMainPage from "./containers/admin/AdminMainPage/AdminMainPage.tsx";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/admin' element={<AdminMainPage />}/>
                    <Route path='/admin/dishes' element={<AdminDishesList />}/>
                    <Route path='/admin/newPizza' element={<NewPizza />}/>
                </Routes>
            </Layout>
        </>
    );
};

export default App;