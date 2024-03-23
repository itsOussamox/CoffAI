import React from 'react'
import { CiCoffeeCup } from "react-icons/ci";

const Highlight =() => {
  return (
    <div className='flex flex-row items-center bg-clip-text bg-gradient-to-r from-cof1 via-cof3 to-cof2'>
      <div className='text-4xl font-bold text-transparent'>COFFAI</div>
    </div>
  )
}

export const Nav = () => {
  return (
    <div className='h-[64px] w-full min-h-[64px] bg-secondary-bg dark:bg-dsecondary-bg flex flex-row shadow-2xl'>
        <div className='flex flex-col ml-[5%] justify-center w-full '>
            <Highlight/>
        </div>
    </div>
  )
}
