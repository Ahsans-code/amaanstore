import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p5 from '../images/p5.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'
export default function Logs() {

    const ticketsData = [
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
    ]
    return (
        <div className="bg-white rounded-2xl px-7 py-3 h-96 w-full shadow-lg overflow-hidden  ">
            <h2 className='py-5'>Logs</h2>

            <div className='custom-scrollbar h-[80%] '>
                {ticketsData.map((ticket, idx) => (
                    <div key={idx} className='flex items-center py-6 border-b-[1px] text-sm w-full  text-gray-500'>
                        <img src={ticket.image} alt="" className='w-10 rounded-full pr-4' />
                        <div className='flex flex-col justify-between'>
                            <p>{ticket.name}</p>
                            <p>{ticket.date}</p>
                        </div>

                    </div>
                ))
                }
            </div>

        </div>
    )
}
