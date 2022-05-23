import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const publicRoutes = [
    { path: "/", name: 'Home', Component: Home },
    { path: "/home", name: 'Home', Component: Home },
    { path: "/blog", name: 'Login', Component: Blog },
    { path: "/login", name: 'Login', Component: Login },
    { path: "/register", name: 'Login', Component: Register }

]