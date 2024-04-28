import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";
import AddArt from "../components/Pages/AddArt/AddArt";
import Artlist from "../components/Pages/ArtList/Artlist";
import PrivateRoute from "../Layouts/PrivateRoutes/PrivateRoute";
import Details from "../components/Details/Details";


 const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },{
                path:'/:id',
                element:<PrivateRoute><Details/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allArt/${params.id}`)
            },{
                path: '/logIn',
                element: <LogIn/>
            },{
                path:'/register',
                element:<Register/>
            },{
                path:'/addArt',
                element: <PrivateRoute><AddArt/></PrivateRoute> 
            },{
                path:'/artList',
                element: <PrivateRoute><Artlist/></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/allArt')
            }
        ]
    }
]);

export default router;

