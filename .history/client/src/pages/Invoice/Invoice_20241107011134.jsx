import React from 'react'
import Heading from "../../components/Heading/Heading";
import { logo } from '../../assets';
export default function Invoice() {
  return (
    <div className='w-full  px-4 md:px-8 lg:px-12 py-10 '>
      <Heading title={'Invoice'} sub1={'Home'} sub2={'Pages'} sub3={'Invoice'}/>
      <div>
        <div>
          <img src={logo} alt="" />
          
        </div>
        <div></div>
      </div>
    </div>
  )
}
