import dayjs from "dayjs"
import "dayjs/locale/es"
import { Link } from "react-router-dom"
import { FcCalendar } from "react-icons/fc"

function Launches(data) {

 
    return(
        <div className="mt-3 bg-amber-400 p-4 w-72 rounded-md text-lg sm:w-96">
            <span>Mission <strong>{data.data.mission_name}</strong></span>
            <span className={`float-right ${data.data.launch_success ? 'bg-green-500' : 'bg-red-500'} p-1 rounded-md`}>{data.data.launch_success? "Sucees" : "Failure"}</span>
            <div className="grid">
                <span className="flex items-center">
                    <FcCalendar className="mr-2"/>
                    {dayjs (data.data.launch_date_local)
                    .locale("es")
                    .format("DD/MM/YYYY")}
                </span>
            </div>
            <div className="grid float-left p-2 rounded-lg mt-1 bg-cyan-600">
                <Link to={`/launch/${data.data.flight_number}`}>
                    <button>More detail</button>
                </Link>
            </div>
        </div>
    )
}

export { Launches }