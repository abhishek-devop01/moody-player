import AppRoute from "./AppRoute"
import FacialExpression from "./components/FacialExpression"
import Landing from "./components/Landing"
import MoodSongs from './components/MoodSongs'
import { useState } from "react"

function App() {
   const [ Songs, setSongs ] = useState([
          
      ])

  return (
    <div className="h-screen bg-zinc-800 ">
      {/* <Landing /> */}
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />

      {/* <AppRoute/> */}
    </div>
  )
}

export default App
