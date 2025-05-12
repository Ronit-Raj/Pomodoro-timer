import { useEffect, useRef, useState } from "react"
import "/play.svg?url"
import "/pause.svg?url"

const startTime={
    hour:2,
    min:30,
    sec:30
}

function Timer(){
    const [time,setTime]=useState(startTime)
    const [running,setRunning]=useState(false)
    const runningRef = useRef(running)
    const clockRef=useRef(null)

    useEffect(()=>{
        runningRef.current=running
    },[running])

    useEffect(()=>{
        const id=setInterval(() => {
            setTime((time)=>{
                if(!runningRef.current) return {...time}
                
                let newTime={...time};
                if(time.sec>0) 
                    newTime.sec--;
                else if(time.min>0){
                    newTime.min--;
                    newTime.sec=59;  
                }
                else if(time.hour>0){
                    newTime.hour--;
                    newTime.min=59;
                    newTime.sec=59;
                }
                else{
                    setRunning(false)
                }
                
                let complete=((startTime.hour*3600-newTime.hour*3600 + startTime.min*60-newTime.min*60 + startTime.sec-newTime.sec)/(startTime.hour*3600 + startTime.min*60 + startTime.sec))*360;
                clockRef.current.style.backgroundImage=`conic-gradient(#0ea5e9 0deg ${Math.ceil(complete)}deg, transparent ${Math.ceil(complete)}deg)`;
                return newTime
            })
        }, 1000);

        return () => clearInterval(id)
    },[])
    

    return (
        <div className="border flex justify-center items-center flex-col w-48 h-72 rounded-2xl">
            <div className="text-white rounded-full mb-8 border-sky-500 font-extrabold  border-4 size-36 flex justify-center items-center"
                ref={clockRef}>
                {time.hour}:{time.min}:{time.sec}
            </div>
            <button className="size-6 " onClick={()=>setRunning(!running)}>
                {running ? <img src="pause.svg"></img> : <img src="play.svg"></img>}
            </button>
        </div>
    )
}
export default Timer