import React from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4  overflow-x-hidden'>
            <div className='hidden lg:flex items-center gap-4'>
                <img src={songsData[0].image} alt="song image" className='w-12' />
                <div >
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className='flex flex-col gap-1 items-center m-auto'>
                <div className='flex gap-4'>
                    <img src={assets.shuffle_icon} alt="shuffle icon" className='w-4' />
                    <img src={assets.prev_icon} alt="prev icon" className='w-4' />
                    <img src={assets.play_icon} alt="play icon" className='w-4' />
                    <img src={assets.next_icon} alt="next icon" className='w-4' />
                    <img src={assets.loop_icon} alt="loop icon" className='w-4' />
                </div>
                <div className='flex items-center gap-5'>
                    <p>1.06</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='h-1 border-none bg-green-800 rounded-full' />
                    </div>
                    <p>3.20</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img src={assets.plays_icon} alt="plays icon" className="w-4" />
                <img src={assets.mic_icon} alt="mic icon" className="w-4" />
                <img src={assets.queue_icon} alt="queue icon" className="w-4" />
                <img src={assets.speaker_icon} alt="speaker icon" className="w-4" />
                <img src={assets.volume_icon} alt="volume icon" className="w-4" />
                <div className='w-20 bg-slate-50 h-1 rounded'></div>
                <img src={assets.mini_player_icon} alt="mini player icon" className="w-4" />
                <img src={assets.zoom_icon} alt="zoom icon" className="w-4" />
            </div>

        </div>
    )
}

export default Player