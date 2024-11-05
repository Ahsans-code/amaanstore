import React from 'react'
import { FaRegCircle } from "react-icons/fa";
export default function Logs() {
    const logsData = [
        {
            log: 'New user registiration',
            date: '14:12',
            color: 'blue'
        },
        {
            log: 'New sale: Soufflé',
            date: '13:22',
            color: 'red'
        },
        {
            log: '14 products added',
            date: '12:55',
            color: 'purple'
        },
        {
            log: 'New user registiration',
            date: '14:12',
            color: 'blue'
        },
        {
            log: 'New user registiration',
            date: '14:12',
            color: 'blue'
        },
        {
            log: 'New sale: Soufflé',
            date: '13:22',
            color: 'red'
        },
        {
            log: '14 products added',
            date: '12:55',
            color: 'purple'
        },
        {
            log: 'New user registiration',
            date: '14:12',
            color: 'blue'
        },
        {
            log: 'New sale: Soufflé',
            date: '13:22',
            color: 'red'
        },
        {
            log: '14 products added',
            date: '12:55',
            color: 'purple'
        },
        {
            log: 'New user registiration',
            date: '14:12',
            color: 'blue'
        },
        {
            log: 'New sale: Soufflé',
            date: '13:22',
            color: 'red'
        },
        {
            log: '14 products added',
            date: '12:55',
            color: 'purple'
        },
    ]
    return (
        <div className="bg-white rounded-2xl px-7 py-2 h-96 w-full shadow-lg overflow-hidden border-2 ">
            <h2 className='py-4 text-lg'>Logs</h2>

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