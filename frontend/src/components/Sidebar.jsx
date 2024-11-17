import React from 'react'
import { assets } from './../assets/assets';

const Sidebar = () => {
    return (
        <div className=' h-full w-[25%] p-2 flex-col gap-2 text-white hidden md:flex'>
            <div className='bg-[#121212] h-[15%]  rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src={assets.home_icon} alt='home icon' className='w-6' />
                    <p>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src={assets.search_icon} alt="search icon" className='w-6' />
                    <p>Search</p>
                </div>
                <div>

                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src={assets.stack_icon} alt="stack icon" className='w-8' />
                        <p className='font-semibold'>Your library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={assets.arrow_icon} alt="arrow icon" className='w-5' />
                        <img src={assets.plus_icon} alt="plus icon" className='w-5' />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-3 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>It's easy well help you</p>
                    <button className='px-4 py-1.5 text-black bg-white text-[15px] rounded-full '>Create playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>We'll keep you update on new episodes</p>
                    <button className='px-4 py-1.5 text-black bg-white rounded-full text-[15px]'>Browse podcasts</button>
                </div>

            </div>
        </div>
    )
}

export default Sidebar