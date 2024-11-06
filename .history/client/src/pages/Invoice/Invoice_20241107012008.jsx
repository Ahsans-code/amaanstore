import React from 'react'
import Heading from "../../components/Heading/Heading";
import { logo } from '../../assets';
export default function Invoice() {
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
        <div>
          <div className='w-2/3 bg-gray-100 '>


          </div>
          <div className='w-1/3 pl-3 bg-gray-100'>
          </div>
        </div>
      </div>
    </div>
  )
}
