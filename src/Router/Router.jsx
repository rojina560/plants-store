import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PlantShop from "../Pages/PlantShop/PlantShop";

const router = createBrowserRouter([{
    path: '/',
    element:<Layouts></Layouts>,
    children: [{
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/plantsCount')

    },
    {
        path: '/shop',
        element: <PlantShop></PlantShop>

    },

    {
        path:'/login',
        element: <Login></Login>

    },
    {
        path: '/register',
        element: <Register></Register>
    }
]
}])
export default router