import { useState, useEffect } from "react";
import * as API from "../services/launches"

function UseGetDataLaunches() {
    const [launch, setLaunch] = useState(null)

    useEffect(() => {
        API.getDateOfLaunches().then(setLaunch)
    }, [])

    return { launch }
}

export { UseGetDataLaunches }