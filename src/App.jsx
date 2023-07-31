import { Launches } from "./components/Launches"
import { UseGetDataLaunches } from "./hooks/UseGetData"

function App() {

  const { launch } = UseGetDataLaunches()

  return (
    <div>
      <h1>Welcome!</h1>

      <div>
        {launch?.map(data => <Launches key={data.flight_number} data={data}/>)}
      </div>
      
    </div>
  )
}

export default App
