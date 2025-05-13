import { useState } from "react";



export default function Scheduler(){    
    return(
        <div className="border rounded-3xl w-9/12 h-3/4 flex flex-col">
            <div className="h-5/6  flex flex-col">
                
            </div>
            <div className="flex justify-evenly">
                <button className="bg-[#4fc3f7] text-white rounded-2xl w-32 h-11">+Work</button>
                <button className="bg-[#66bb6a] text-white hover:shadow-[#66bb6a] rounded-2xl w-32 h-11">+Break</button>
                <button className="bg-[#66bb6a] text-white hover:shadow-[#66bb6a] rounded-2xl w-32 h-11">+Long Break</button>
                <button className="bg-[#c12727] text-white rounded-2xl w-32 h-11">Clear all</button>
            </div>
        </div>
    )
}