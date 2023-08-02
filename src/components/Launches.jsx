function Launches(data) {
    return(
        <div className="mt-3 bg-amber-400 w-96 p-4 rounded-md text-center text-lg cursor-pointer">
            <h1>{data.data.mission_name} </h1>
        </div>
    )
}

export { Launches }