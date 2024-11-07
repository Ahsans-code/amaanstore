import React from 'react';
import Heading from "../../components/Heading/Heading";
import { logo } from '../../assets';

export default function Invoice() {
  const invoiceData = [
    {
      name: 'Marble Cake',
      count: 3,
      price: 14.82
    },
    {
      name: 'Marble Cake',
      count: 3,
      price: 14.82
    },
    {
      name: 'Marble Cake',
      count: 3,
      price: 14.82
    },
    {
      name: 'Marble Cake',
      count: 3,
      price: 14.82
    },
    {
      name: 'Marble Cake',
      count: 3,
      price: 14.82
    },
    {
      name: 'Marble Cake',
      count: 3,
      price: 14.82
    },
    {
      name: 'Marble Cake',
      count: 3,
      price: 14.82
    },
   
    // Add more items if needed...
  ];

  return (
    <div className='w-full px-4 md:px-8 lg:px-12 py-10'>
      <Heading title={'Invoice'} sub1={'Home'} sub2={'Pages'} sub3={'Invoice'} />
      <div className='bg-white p-6 md:p-9 rounded-xl w-full md:w-3/4 mx-auto mt-9 shadow-xl'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center pb-8 border-b-[1px]'>
          <img className='w-20 mx-auto md:mx-0' src={logo} alt="Logo" />
          <div className='text-center md:text-end text-sm mt-4 md:mt-0'>
            <p>ColoredStrategies Inc, 35 Little Russell St.</p>
            <p>Bloomsburg, London, UK</p>
            <p>784 451 12 47</p>
          </div>
        </div>

        {/* Address section */}
        <div className='flex flex-col md:flex-row items-center justify-between text-sm mt-8'>
          <div className='w-full md:w-2/3 bg-gray-100 p-6 mb-4 md:mb-0'>
            <p>Latashia Nagy</p>
            <p>100-148 Warwick Trfy, Kansas City, USA</p>
          </div>
          <div className='w-full md:w-1/3 md:pl-3'>
            <div className='bg-gray-100 p-6 text-center md:text-end'>
              <p>Invoice #: 741</p>
              <p>02.02.2019</p>
            </div>
          </div>
        </div>

        {/* Table section */}
        <div className='mt-6 px-1'>
          <div className='flex justify-between text-xs font-semibold uppercase pb-8'>
            <p>Item</p>
            <p>Count</p>
            <p>Price</p>
          </div>
          {invoiceData.map((item, i) => (
            <div key={i} className='flex justify-between text-xs pb-8'>
              <p>{item.name}</p>
              <p>{item.count}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </div>

        {/* Prices section */}
        <div className='py-9 px-1 text-sm flex w-full justify-end border-t-[1px]'>
          <div className='flex w-full md:w-1/3 lg:w-1/4 items-center justify-between'>
            <div className='flex flex-col gap-5 items-start'>
              <p>Subtotal :</p>
              <p>Tax :</p>
              <p>Shipping :</p>
              <p>Total :</p>
            </div>
            <div className='flex flex-col gap-5 items-end'>
              <p>$ 61.82</p>
              <p>$ 61.82</p>
              <p>$ 3.21</p>
              <p>$ 68.14</p>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className='pt-9 flex justify-center items-center w-full text-center text-sm border-t-[1px]'>
          <p>Invoice was created on a computer and is valid without the signature and seal.</p>
        </div>
      </div>
    </div>
  );
}
