import { useState, useEffect } from "react"
import * as API from "../services/launches"

function UseGetDatailLaunches(launchId) {
    const [detailLaunch, setDetailLaunch] = useState(null)

    useEffect(() => {
        API.getDetailLaunch(launchId).then(setDetailLaunch).catch(console.log)
    }, [launchId])

    return { detailLaunch }
}

export { UseGetDatailLaunches }