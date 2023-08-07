import { Launches } from "../Launches"
import { UseGetDataLaunches } from "../../hooks/UseGetData"
import { Loading } from "../Loading"
import { NotFound } from "../NotFound"

function Launch() {

    const { launch } = UseGetDataLaunches()

    console.log()

    function loadingAndNotFound() {
        if(launch?.length >= 0) return launch?.map(items => <Launches key={items.flight_number} data={items}/>)
        if (!launch) return <NotFound/>
        else return <Loading/>
    }

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl bg-cyan-600 p-3 mt-10 rounded-md">SpaceX Launches</h1>
            </div>

            <div className={`${launch?.length >= 0 ? 'grid mt-8' : ''} justify-items-center w-full grid-cols-1 mb-10 md:grid-cols-2 2xl:grid-cols-3`}>
                {loadingAndNotFound()}
            </div>
        </div>
    )
}

export { Launch } 