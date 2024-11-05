import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p5 from '../images/p5.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'
export default function Ticket() {

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
            <h2 className='py-4'>Tickets</h2>

            <div className='custom-scrollbar h-[80%] '>
                {ticketsData.map((ticket, idx) => (
                    <div key={idx} className='flex items-center py-4 border-b-[1px] text-sm w-full  text-gray-500'>
                        <img src={ticket.image} alt="" className='w-11 rounded-full ' />
                        <div className='flex flex-col justify-between pl-4'>
                            <p>{ticket.name}</p>
                            <p className='opacity-60'>{ticket.date}</p>
                        </div>

                    </div>
                ))
                }
            </div>

        </div>
    )
}
