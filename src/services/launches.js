const API_URL = "https://api.spacexdata.com/v3"

async function getDateOfLaunches() {
  try{
    const response = await fetch(`${API_URL}/launches`)
    const data = await response.json()
    return data
  }catch (error){
    console.error(error)
  }
}

export { getDateOfLaunches }


async function getDetailLaunch(fligth_number) {
  try {
    const response = await fetch(`${API_URL}/launches/${fligth_number}`)
    const data = await response.json()
    return data
  } catch (error){
    console.error(error)
  }
}

export { getDetailLaunch }