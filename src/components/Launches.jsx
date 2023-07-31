function Launches(data) {
    return(
        <div className="felx flex-col">
            <h1> launches name is: {data.data.mission_name} </h1>
        </div>
    )
}

export { Launches }