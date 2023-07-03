import React from 'react'
import { whatWeDo } from '../constants/whatWeDo'
import Image from 'next/image'

export const WhatWeDo = () => {
  return (
    <section>
      <div>
        <h1>WHAT WE DO</h1>
      </div>
      <div className='flex justify-center items-start flex-shrink-0 gap-5 w-[985px] h-[753px]'>
            {
              whatWeDo.map(context => (
                <div key={context.id} className='w-[315px] h-[743px] flex-shrink-0 rounded-[30px] bg-color-card flex flex-col items-center gap-5'>
                    <Image src={context.imgEvent} alt={context.event} width={290} height={297} className='pt-4'/>
                    <h3 className='text-[#fff] uppercase font-bebas_neue font-bold leading-[30px] text-center text-base'>{context.event}</h3>
                    <p className='text-[#C1C2C6] flex font-inter leading-[30px] text-center font-normal text-xs px-7'>{context.content}</p>
                    <button className='text-sm font-inter text-white w-[250px] h-[50px] rounded-[50px] btn-gradient'>{context.btnInfo}</button>
                </div>
              ))
            }
      </div>
    </section>
  )
}
