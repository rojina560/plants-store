import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PlantShop from "../Pages/PlantShop/PlantShop";
import PlantVeiwCart from "../Pages/PlantVeiwCart/PlantVeiwCart";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layouts/DashBoard";
import Cart from "../Pages/Dashborad/Cart/Cart";
import AllUsers from "../Pages/Dashborad/AllUser/AllUsers";
import AddItems from "../Pages/Dashborad/AddItems/AddItems";

const router = createBrowserRouter([{
    path: '/',
    element:<Layouts></Layouts>,
    children: [{
        path: '/',
        element: <Home></Home>,
        

    },

    {
        path: '/shop',
        element: <PlantShop></PlantShop>

    },
    {

        path:'/plants/:id',
        element: <PrivateRoute><PlantVeiwCart></PlantVeiwCart></PrivateRoute>,
        loader: ({params}) =>fetch(`http://localhost:5000/plants/${params.id}`)
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
},
{
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children:[
        // normal users
        {
            path: 'cart',
            element: <Cart></Cart>

        },
        // admin role
        {
            path:''

        },
        {
            path: 'allUsers',
            element: <AllUsers></AllUsers>
        },
        {
            path: 'addItems',
            element:<AddItems></AddItems>

        }
    ]
}
])
export default router