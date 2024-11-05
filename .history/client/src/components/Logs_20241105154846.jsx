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
        <div className="bg-white rounded-2xl p-3 h-96 shadow-lg ">
            <h2 className='py-5'>Logs</h2>
            <div className='overflow-hidden h-full'>
                <div className='custom-scrollbar '>
                    {logsData.map((log, idx) => (
                        <div key={idx} className='flex items-center py-4'>
                            <FaRegCircle color={log.color} className=' justify-start' />
                            <p className='justify-start pl-4'>{log.log}</p>
                            <p className='justify-end'>{log.date}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
