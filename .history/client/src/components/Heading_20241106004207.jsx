import React from 'react'

export default function Heading({title,sub1,sub2,sub3,sub4}) {
    return (
        <div className=''>
            <div className='border-b-[1px] text-gray-700 border-gray-300 flex gap-5 pb-6  items-end '>

                <h1 className='text-3xl'>{title}</h1>
                <p className='max:md-hidden text-sm'>{sub1} </p>
                <p  className='max:md-hidden text-sm'>{sub2&&<span className='pr-4'>|</span>}{sub2} </p>
                <p className='max:md-hidden text-sm'>{sub3&&<span className='pr-4'>|</span>}{sub3} </p>
                <p className='max:md-hidden text-sm'>{sub4&&<span className='pr-4'>|</span>}{sub4}</p>
            </div>
        </div>
    )
}
