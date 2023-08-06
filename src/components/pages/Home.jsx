import { Link } from "react-router-dom"

function Home() {

    return(
        <div className="flex flex-col items-center text-center mt-56">
            <h1  className="text-3xl">Wekcome!</h1>
            <p className="mt-2 text-base">this website is to see <a target="_blank" href="https://www.spacex.com" rel="noreferrer" className="underline underline-offset-4">Space X</a> launches</p>
            <span className="text-lg rounded-lg bg-cyan-600 p-2 mt-5 cursor-pointer"> <Link to='/launches'>see lauches</Link></span>
        </div>
    )
}

export { Home }