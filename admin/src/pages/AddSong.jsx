import React, { useState } from 'react'
import { assets } from './../assets/assets';

const AddSong = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [album, setAlbum] = useState('none')
    const [image, setImage] = useState(false)
    const [audio, setAudio] = useState(false)
    const [loading, setLoading] = useState(false)
    const [albumData, setAlbumData] = useState([])

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(name, desc, album, image, audio)
    }

    return loading ? (<div className='grid place-items-center min-h-[80vh]'>
        <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>
    </div>) : (
        <form className='flex flex-col items-start gap-8 text-gray-600' onSubmit={submitHandler}>
            <div className='flex gap-8'>
                <div className='flex flex-col gap-4'>
                    <p>Upload song</p>
                    <input type="file" id='song' accept='audio/*' hidden onChange={e => setAudio(e.target.files[0])} />
                    <label htmlFor="song">
                        <img src={audio ? assets.upload_added : assets.upload_song} alt='upload song' className='w-24 cursor-pointer' />
                    </label>
                </div>
                <div className='flex flex-col gap-4'>
                    <p>Upload Image</p>
                    <input type="file" id='image' accept='image/*' onChange={e => setImage(e.target.files[0])} hidden />
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='upload image' className='w-24 cursor-pointer' />
                    </label>
                </div>
            </div>
            <div className='flex flex-col gap-2.5'>
                <p>Song name</p>
                <input type="text" placeholder='type here' value={name} onChange={e => setName(e.target.value)} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' />
            </div>
            <div className='flex flex-col gap-2.5'>
                <p>Song description</p>
                <input type="text" placeholder='type here' value={desc} onChange={e => setDesc(e.target.value)} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' />
            </div>
            <div className='flex flex-col gap-2.5'>
                <p>Album</p>
                <select name="" value={album} onChange={e => setAlbum(e.target.value)} id="" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]'>
                    <option value="none">None</option>
                </select>
            </div>
            <button type='submit' className='text-base bg-black text-white p-2.5 px-14 cursor-pointer'>ADD</button>
        </form>
    )
}

export default AddSong