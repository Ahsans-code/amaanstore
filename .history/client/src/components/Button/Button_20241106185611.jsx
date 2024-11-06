import React from 'react'

export default function Button({text,className}) {
    return (
        <button className={`${className} bg-gray-100 rounded-full py-1 px-5 text-xs md:text-sm text-gray-500 border border-primary hover:bg-primary hover:text-white transition-all duration-200`}>
            {text}
        </button>
    )
}
