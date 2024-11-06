import React from 'react'
import Heading from "../../components/Heading/Heading";
import { logo } from '../../assets';
export default function Invoice() {
  const invoiceData=[
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
    {
      name:'Marble Cake',
      count:3,
      price:14.82
    },
  ]
  return (
    <div className='w-full  px-4 md:px-8 lg:px-12 py-10 '>
      <Heading title={'Invoice'} sub1={'Home'} sub2={'Pages'} sub3={'Invoice'} />
      <div className='bg-white p-8 rounded-xl w-3/4 mt-9'>
        <div className='flex justify-between items-center pb-8 border-b-[1px]'>
          <img className='w-20' src={logo} alt="" />
          <div className='text-end text-sm'>
            <p>ColoredStrategies Inc 35 Little Russell St.</p>
            <p>Bloomsburg London,UK</p>
            <p>784 451 12 47</p>
          </div>
        </div>
        <div className='flex items-center justify-between text-sm mt-8'>
          <div className='w-2/3 bg-gray-100 p-6 '>
            <p>Latashia Nagy</p>
            <p>100-148 Warwick Trfy, Kansas City, USA</p>


          </div>
          <div className='w-1/3 pl-3 '>
            <div className='bg-gray-100 p-6 text-end'>
            <p>Invoice #: 741</p>
            <p>02.02.2019</p>
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <div className='flex justify-between text-xs font-semibold uppercase'>
            <p>Item</p>
            <p>Count</p>
            <p>price</p>
          </div>
{
  invoiceData.map((item,i)=>(
    <div key={i} className='flex justify-between text-xs font-semibold uppercase'>
            <p>{item.name}</p>
            <p>{item.count}</p>
            <p>{item.price}</p>
          </div>
  ))
}
        </div>
      </div>
    </div>
  )
}
