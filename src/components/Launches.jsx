import dayjs from "dayjs"
import "dayjs/locale/es"

function Launches(data) {
    return(
        <div className="mt-3 bg-amber-400 w-96 p-4 rounded-md text-lg cursor-pointer">
            <span>Mission <strong>{data.data.mission_name}</strong></span>
            <span className={`float-right ${data.data.launch_success ? 'bg-green-500' : 'bg-red-500'} p-1 rounded-md`}>{data.data.launch_success? "Sucees" : "Failure"}</span>
            <div>
                <span>
                    {dayjs (data.data.launch_date_local)
                    .locale("es")
                    .format("DD/MM/YYYY")}
                </span>
            </div>
        </div>
    )
}

export { Launches }