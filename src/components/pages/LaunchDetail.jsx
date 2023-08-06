
import { UseGetDatailLaunches } from "../../hooks/UseGetDetailLaunch"
import { useParams } from "react-router-dom";

function LaunchDetail() {

    let { launchId } = useParams()

    UseGetDatailLaunches(launchId)

    return(
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl bg-cyan-600 p-3 mt-10 rounded-md">SpaceX Launches</h1>
            </div>

            <div className="flex flex-col items-center w-full mt-8 mb-10">
                id {launchId}
            </div>

        </div>
    );
}

export { LaunchDetail }
