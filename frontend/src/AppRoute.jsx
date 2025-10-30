import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import MoodSongs from './components/MoodSongs'

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<Landing />} /> */}
                <Route path='/songs' element={<MoodSongs />} />
                
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default AppRoute