import { useState } from 'react'
import Timer from './timer'

function App() {

  return (
    <div className='flex justify-center items-center h-screen'>
      <Timer type={"work"} startTime={{hour:0,min:0,sec:10}}>
      </Timer>
    </div>
  )
}

export default App
