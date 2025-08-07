import FacialExpression from "./components/FacialExpression"
import MoodSongs from './components/MoodSongs'
import { useState } from "react"

function App() {
   const [ Songs, setSongs ] = useState([
          
      ])

  return (
    <div className="h-screen bg-zinc-800 ">
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </div>
  )
}

export default App
