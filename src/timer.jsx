import { useEffect, useRef, useState } from "react"
import "/play-break.svg?url"
import "/pause-break.svg?url"
import "/play-work.svg?url"
import "/pause-work.svg?url"


function Timer(props){
    const [time,setTime]=useState(props.startTime)
    const [running,setRunning]=useState(false)
    const [completed,setCompleted]=useState(false)

    const runningRef = useRef(running)
    const clockRef=useRef(null)
    let pauseSvg=(props.type==='break'?'pause-break.svg':'pause-work.svg')
    let playSvg=(props.type==='break'?'play-break.svg':'play-work.svg')
    let borderColorClass=(props.type==='break'?'border-[#66bb6a]':'border-[#4fc3f7]')
    let color=(props.type==='break'?'#66bb6a':'#4fc3f7')
    // clockRef.current?.classList.add(`border-[${color}]`)

    useEffect(()=>{
        runningRef.current=running
    },[running])

    useEffect(()=>{
        if(!completed){
            return 
        }
        // Clear the gradient
        clockRef.current.style.backgroundImage = "none";
        setRunning(false);

        // Let the browser paint the cleared background…
        const tid = window.requestAnimationFrame(() => {
        // …then move on to the next session
        props.next();
        });

        return () => window.cancelAnimationFrame(tid);
    },[completed])

    useEffect(()=>{
        setTime(props.startTime)
    },[props.startTime])
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
                    clockRef.current.style.backgroundImage=`none`;
                    setCompleted(true)
                    setRunning(false)
                }
                
                let complete=((props.startTime.hour*3600-newTime.hour*3600 + props.startTime.min*60-newTime.min*60 + props.startTime.sec-newTime.sec)/(props.startTime.hour*3600 + props.startTime.min*60 + props.startTime.sec))*360;
                clockRef.current.style.backgroundImage=`conic-gradient(${color} 0deg ${Math.ceil(complete)}deg, transparent ${Math.ceil(complete)}deg)`;
                return newTime
            })
        }, 1000);

        return () => clearInterval(id)
    },[pauseSvg,playSvg,color,borderColorClass])
    
    function toTwoDigit(num){
        let temp=num.toString()
        if(temp.length==2)
            return temp;
        else
            return "0"+temp;
    }

    return (
        <div className="border flex justify-center items-center flex-col w-2/3 h-2/3 rounded-2xl m-4">
            <div className={`text-white text-3xl rounded-full mb-8  font-extrabold ${borderColorClass} border-4 aspect-square w-2/3 flex justify-center items-center`}
                ref={clockRef}>
                {toTwoDigit(time.hour)}:{toTwoDigit(time.min)}:{toTwoDigit(time.sec)}
            </div>
            <button className="size-12 border-2 rounded-full flex justify-center items-center" onClick={()=>setRunning(!running)}>
                {running ? <img  className="size-6" src={pauseSvg}></img> : <img className="size-6" src={playSvg}></img>}
            </button>
        </div>
    )
}
export default Timer