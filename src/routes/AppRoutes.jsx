import { Home } from "../components/pages/Home";
import { Launch } from "../components/pages/Launch";
import { useRoutes } from "react-router-dom";
import { LaunchDetail } from "../components/pages/LaunchDetail";

function AppRoutes() {
    const rutes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/launches', element: <Launch/>},
        {path: `/launch/:launchId`, element: <LaunchDetail/>}
    ])

    return rutes
}

export { AppRoutes }