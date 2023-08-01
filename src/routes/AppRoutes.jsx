import { Home } from "../components/pages/Home";
import { Launch } from "../components/pages/Launch";
import { useRoutes } from "react-router-dom";

function AppRoutes() {
    const rutes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/launches', element: <Launch/>}
    ])

    return rutes
}

export { AppRoutes }