import React from 'react'
import Heading from "../../components/Heading/Heading";
import { logo } from '../../assets';
export default function Invoice() {
  return (
    <div className='w-full  px-4 md:px-8 lg:px-12 py-10 '>
      <Heading title={'Invoice'} sub1={'Home'} sub2={'Pages'} sub3={'Invoice'} />
      <div>
        <div>
          <img src={logo} alt="" />
          <div><p>ColoredStrategies Inc 35 Little Russell St.
          </p>
            <p>Bloomsburg London,UK</p>
            <p>784 451 12 47</p>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
