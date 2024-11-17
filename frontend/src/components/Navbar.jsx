import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img src={assets.arrow_left} alt="arrow left" className='w-8 bg-black p-2 rounded-2xl cursor-pointer' />
                    <img src={assets.arrow_right} alt="arrow right" className='w-8 bg-black p-2 rounded-2xl cursor-pointer' />
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-xl hidden md:block cursor-pointer'>Explore Premium</p>
                    <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                    <p className='bg-purple-800 w-7 h-7 rounded-full flex justify-center align-center  cursor-pointer'>A</p>
                </div>
            </div>
            <div className='flex gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl'>All</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar