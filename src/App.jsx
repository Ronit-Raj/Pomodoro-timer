import { useEffect, useState } from 'react'
import Timer from './Timer.jsx'
import TopBar from './TopBar.jsx'
import Scheduler from './Scheduler.jsx'

const defaultWorkTime={hour:0,min:0,sec:5}
const dafaultBreak={hour:0,min:5,sec:0}
const defaultLongBreak={hour:0,min:15,sec:0}
const defaultSchedule=[
    {id:1,type:"work",time:defaultWorkTime},
    {id:2,type:"break",time:dafaultBreak},
    {id:3,type:"work",time:defaultWorkTime},
    {id:4,type:"break",time:defaultLongBreak},
    {id:5,type:"work",time:defaultWorkTime}
]

function App() {
  const [sessions,setSessions]=useState(defaultSchedule) //an array to denote the entire schedule 
//   const [sessionType,setSessionType]=useState(sessions[0].type) //current session 
//   const [sessionTime,setSessionTime]=useState(sessions[0].time) //time for current session 


  function addWork(time=defaultWorkTime){
      setSessions([
          ...sessions,
          {
              id:sessions.length+1,
              type:"work",
              time:time
          }
      ])
  }

  function addBreak(longBreak,time=dafaultBreak){
      if(longBreak){
          setSessions([
              ...sessions,
              {
                  id:sessions.length+1,
                  type:"break",
                  time:time
              }
          ])
      }
      else{
          setSessions([
              ...sessions,
              {
                  id:sessions.length+1,
                  type:"break",
                  time:time
              }
          ])
      }
  }

  function nextSession(){
    console.log('next session started ');
    if(sessions.length==0)
        ;
    else{
        setSessions((sessions)=>sessions.filter((_,index)=>index !== 0))
        // setSessionTime((_)=>sessions[0].time)
        // setSessionType((_)=>sessions[0].type)
    }
  }

  return (
    <div className='flex items-center flex-col  min-h-screen'>
      <TopBar/>
      <div className='grid grid-cols-10 flex-1 w-screen'>
            <div className='col-span-3 flex justify-center items-center '>
              <Timer type={sessions[0].type} startTime={sessions[0].time} next={nextSession}/>
            </div>
            <div className='col-span-7 flex justify-center items-center'>
                <Scheduler/>
            </div>
      </div>
    </div>
  )
}

export default App
