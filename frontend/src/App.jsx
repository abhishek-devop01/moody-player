import FacialExpression from "./components/FacialExpression"
import MoodSongs from './components/MoodSongs'
import { useState } from "react"

function App() {
   const [ Songs, setSongs ] = useState([
          {
              title: "test_title",
              artist: "test_artist",
              url: "test_url",
          },
          {
              title: "test_title",
              artist: "test_artist",
              url: "test_url",
          },
          {
              title: "test_title",
              artist: "test_artist",
              url: "test_url",
          },
      ])

  return (
    <div className="h-screen bg-zinc-800 ">
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </div>
  )
}

export default App
