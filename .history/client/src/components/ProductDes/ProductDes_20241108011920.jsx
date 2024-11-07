import React from 'react'
import { MdCancel } from "react-icons/md";
export default function ProductDes({customerName,imageUrl,description,price,quantity,totalPrice,onClick}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 mt-24 max-h-[80vh] custom-scrollbar">
    <h2 className="text-lg font-bold mb-4 flex items-center justify-between">{customerName}'s Order Details
        <MdCancel className=" text-red-500" size={25}  onClick={onClick} />
    </h2>
    <img src={imageUrl} alt="Product" className="mb-4 w-40 h-40 rounded-lg" />
    <p><strong>Description:</strong> {description}</p>
    <p><strong>Price:</strong> {price}</p>
    <p><strong>Quantity:</strong> {quantity}</p>
    <p><strong>Total Price:</strong> {totalPrice}</p>
    
</div>
  )
}
