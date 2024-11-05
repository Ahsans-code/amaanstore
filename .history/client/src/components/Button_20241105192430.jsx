import React from 'react'

export default function Button({text}) {
    return (
        <button className='bg-gray-100 rounded-full py-2 px-5 text-xs md:text-sm text-gray-500 border border-[#4B9E60] hover:bg-[#4B9E60] hover:text-white transition-all duration-200'>
            {text}
        </button>
    )
}
