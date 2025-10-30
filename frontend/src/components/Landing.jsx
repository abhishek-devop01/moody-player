import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='text-white'>
     <nav>
          
          landing
     </nav>
     <Link to={'/songs'}>Get started</Link>
    </div>
  )
}

export default Landing