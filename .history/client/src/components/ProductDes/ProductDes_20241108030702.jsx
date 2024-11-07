import React from 'react'
import { MdCancel } from "react-icons/md";
export default function ProductDes({ customerName, imageUrl, description, price, quantity, totalPrice, onClick }) {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-12 sm:mt-16 md:mt-20 lg:mt-24 md:max-h-[80vh] custom-scrollbar">
            <h2 className="text-lg font-bold mb-4 flex items-center justify-between">
                {customerName}'s Order Details
                <MdCancel className="text-red-500 cursor-pointer" size={25} onClick={onClick} />
            </h2>
            <img src={imageUrl} alt="Product" className="mb-4 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-lg" />
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Price:</strong> {price}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <p><strong>Total Price:</strong> {totalPrice}</p>
        </div>
    )
}
