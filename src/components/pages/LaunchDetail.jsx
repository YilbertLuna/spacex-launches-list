import { UseGetDatailLaunches } from "../../hooks/UseGetDetailLaunch"
import { useParams } from "react-router-dom";
import { TiLocation } from "react-icons/ti"
import { FcCalendar } from "react-icons/fc"
import { BsYoutube } from "react-icons/bs"
import { IoMdArrowBack } from "react-icons/io"
import dayjs from "dayjs";
import "dayjs/locale/es"
import { Link } from "react-router-dom";


function LaunchDetail() {

    let { launchId } = useParams()

    const { detailLaunch } = UseGetDatailLaunches(launchId)

    return(
        <div className="flex flex-col items-center mb-7">
            <div className="flex justify-center">
                <h1 className="text-3xl bg-cyan-600 p-3 mt-10 rounded-md">SpaceX Launches</h1>
            </div>

            <div className="grid mt-10 bg-amber-400 p-4 w-72 rounded-md text-lg sm:w-96">
                <span>
                    <p className="mt-2">Rocket name: <strong>{detailLaunch.rocket?.rocket_name}</strong></p>
                    <p>Launch number: <strong>{detailLaunch.flight_number}</strong></p>
                    <span className="flex items-center mt-2">
                        <p className="flex items-center mr-2"><FcCalendar/> Date: </p>
                            {dayjs (detailLaunch.launch_date_local)
                            .locale("es")
                            .format("DD/MM/YYYY")}
                    </span>
                    <span className="flex items-center mt-2">
                        <p>Success: <span className={`${detailLaunch.launch_success ? 'bg-green-500' : 'bg-red-500'} p-1 rounded-md`}>{detailLaunch.launch_success? "Sucees" : "Failure"}</span> </p>
                    </span>
                    <span className="flex items-center mt-2">site<TiLocation className="mr-4"/><p className="text-sm w-62 sm:w-64">{detailLaunch.launch_site?.site_name_long}</p></span>
                    <span className="flex items-center mt-2"><p className="underline underline-offset-2 cursor-pointer mr-1"><a target="_blank" href={detailLaunch.links?.video_link} rel="noreferrer">Watch launch video</a></p><BsYoutube/></span>
                </span>

                <Link to={`/launches`}>
                    <button className="flex items-center p-3 mt-2 rounded-lg bg-cyan-600"> <IoMdArrowBack className="mr-2"/> Back</button>
                </Link>
            </div>

        </div>
    );
}

export { LaunchDetail }
