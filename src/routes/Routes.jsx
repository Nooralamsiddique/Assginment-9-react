import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Pages/Contact/Contact";
import LoginN from "../pages/Login/LoginN";
import RegisterN from "../pages/Register/RegisterN";
import PrivateRouts from "./PrivateRouts";
import UserProfile from "../pages/UserProfile/UserProfile";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import AllEstate from "../pages/AllEstate/AllEstate";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
// import Ditles from "../pages/Ditles/Ditles";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('./cetagories.json')
            },
            {
                path: '/estateDetails/:id',
                element: <PrivateRouts>
                    <EstateDetails></EstateDetails>
                </PrivateRouts>,
                loader: () => fetch('../cetagories.json')
            },
            {
                path: '/userProfile',
                element: <PrivateRouts>
                    <UserProfile></UserProfile>
                </PrivateRouts>

            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>

            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/allestate',
                element: <AllEstate></AllEstate>
            },
            {
                path: '/login',
                element: <LoginN></LoginN>
            },
            {
                path: '/register',
                element: <RegisterN></RegisterN>
            },
            {
                path: '/updateProfile',
                element: <PrivateRouts>
                    <UpdateProfile></UpdateProfile>
                </PrivateRouts>
            },

        ],
    },
]);
export default routes;