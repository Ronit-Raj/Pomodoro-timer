import { useState } from "react";

const defaultSchedule=[
    {type:"work",time:{hour:0,min:45,sec:0}},
    {type:"break",time:{hour:0,min:5,sec:0}},
    {type:"work",time:{hour:0,min:45,sec:0}},
    {type:"break",time:{hour:0,min:15,sec:0}},
    {type:"work",time:{hour:0,min:45,sec:0}}
]

export default function Scheduler(){

    const [sessions,setSessions]=useState(defaultSchedule)

    return(
        <div className="border rounded-3xl w-9/12 h-3/4 flex flex-col">
            <div className="h-5/6  flex flex-col">

            </div>
            <div className="flex justify-evenly">
                <button className="bg-[#4fc3f7] rounded-2xl w-32 h-11">+Work</button>
                <button className="bg-[#66bb6a] rounded-2xl w-32 h-11">+Break</button>
                <button className="bg-[#66bb6a] rounded-2xl w-32 h-11">+Long Break</button>
            </div>
        </div>
    )
}