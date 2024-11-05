import React from 'react'

export default function Heading() {
    return (
        <div className='p-10'>
            <div className='border-b-[1px] border-gray-500 flex gap-5 p-10  items-end '>

                <h1 className='text-2xl'>Default</h1>
                <p className='text-sm'>Home</p>|
                <p className='text-sm'>Dashboard</p>|
                <p className='text-sm'>Default</p>
            </div>
        </div>
    )
}