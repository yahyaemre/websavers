import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/home";
import Themes from "../pages/themes";
import Theme from "../pages/theme";
import Error from "../pages/error";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/themes",
        element: <Themes />,
        errorElement: <Error />,
    },
    {
        path: "/themes/:theme",
        element: <Theme />,
        errorElement: <Error />,
    },
]);

export default routes;