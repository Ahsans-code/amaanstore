import React from 'react'
import { FaRegCircle } from "react-icons/fa";
export default function Tickets() {
  return (
    <div className="bg-white rounded-2xl px-7 py-3 h-96 w-full shadow-lg overflow-hidden  ">
    <h2 className='py-5'>Logs</h2>

    <div className='custom-scrollbar h-[80%] '>
        {logsData.map((log, idx) => (
            <div key={idx} className='flex items-center py-[5px] text-sm w-full  justify-between text-gray-500'>
                <div className='flex items-center'>
                    <FaRegCircle color={log.color} className=' justify-start ' />
                    <p className='justify-start pl-4'>{log.log}</p>
                </div>
                <p className='pr-2'>{log.date}</p>
            </div>
        ))
        }
    </div>

</div>
  )
}