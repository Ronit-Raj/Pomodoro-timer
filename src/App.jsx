import { useState } from 'react'
import Timer from './Timer.jsx'
import TopBar from './TopBar.jsx'
import Scheduler from './Scheduler.jsx'

function App() {
  const [sessionType,setSessionType]=useState("break")
  const [sessionTime,setSessionTime]=useState({hour:0,min:0,sec:10})


  return (
    <div className='flex items-center flex-col  min-h-screen'>
      <TopBar/>
      <div className='grid grid-cols-10 flex-1 w-screen'>
            <div className='col-span-3 flex justify-center items-center '>
              <Timer type={sessionType} startTime={sessionTime}/>
            </div>
            <div className='col-span-7 flex justify-center items-center'>
                <Scheduler/>
            </div>
      </div>
    </div>
  )
}

export default App
