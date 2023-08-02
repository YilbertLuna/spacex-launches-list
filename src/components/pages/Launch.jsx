import { Launches } from "../Launches"
import { UseGetDataLaunches } from "../../hooks/UseGetData"

function Launch() {

    const { launch } = UseGetDataLaunches()

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl bg-cyan-600 p-3 mt-10 rounded-md">SpaceX Launches</h1>
            </div>

            <div className="grid justify-items-center w-full grid-cols-1 mt-8 mb-10 md:grid-cols-2">
                {launch?.map(items => <Launches key={items.flight_number} data={items}/>)}
            </div>
        </div>
    )
}

export { Launch } 