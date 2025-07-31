import FacialExpression from "./components/FacialExpression"
import './App.css'
import MoodSongs from './components/MoodSongs'

function App() {


  return (
    <div className="h-screen bg-zinc-800 ">
      <FacialExpression />
      <MoodSongs />
    </div>
  )
}

export default App
