import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { p1,p2,p3,p4,p5 } from '../../assets';

export default function Ticket() {

    const ticketsData = [
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p2,
            name: 'Mimi Carreira',
            date: '05.08.2018 - 10:20'
        },
        {
            image: p3,
            name: 'Philip Nelms',
            date: '05.08.2018 - 09:12'
        },
        {
            image: p4,
            name: 'Terese Threadgill',
            date: '01.08.2018 - 18:20'
        },
        {
            image: p5,
            name: 'Kathryn Mengel',
            date: '27.07.2018 - 11:45'
        },
        {
            image: p1,
            name: 'Mayra Sibley',
            date: '09.08.2018 - 12:45'
        },
        {
            image: p2,
            name: 'Mimi Carreira',
            date: '05.08.2018 - 10:20'
        },
        {
            image: p3,
            name: 'Philip Nelms',
            date: '05.08.2018 - 09:12'
        },
        {
            image: p4,
            name: 'Terese Threadgill',
            date: '01.08.2018 - 18:20'
        },
        {
            image: p5,
            name: 'Kathryn Mengel',
            date: '27.07.2018 - 11:45'
        },
    ]
    return (
        <div className="bg-white rounded-2xl px-7 py-2 h-96 w-full shadow-lg overflow-hidden  ">
            <h2 className='py-4 text-lg'>Tickets</h2>

            <div className='custom-scrollbar h-[80%] '>
                {ticketsData.map((ticket, idx) => (
                    <div key={idx} className='flex items-center py-4 border-b-[1px] text-sm w-full  text-gray-500'>
                        <img src={ticket.image} alt="" className='w-11 rounded-full ' />
                        <div className='flex flex-col justify-between pl-4'>
                            <p className='font-semibold'>{ticket.name}</p>
                            <p className='opacity-60'>{ticket.date}</p>
                        </div>

                    </div>
                ))
                }
            </div>

        </div>
    )
}
