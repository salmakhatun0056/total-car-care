import Home from "../pages/Home";
import Login from "../pages/Login";

export const publicRoutes = [
    { path: "/", name: 'Home', Component: Home },
    { path: "/login", name: 'Login', Component: Login }

]