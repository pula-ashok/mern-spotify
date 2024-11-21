import { v2 as cloudinary } from 'cloudinary'
import songModel from '../models/songModel.js'
//add song
const addSong = async (req, res) => {
    try {
        const name = req.body.name
        const desc = req.body.desc
        const album = req.body.album
        const audioFile = req.files.audio[0]
        const imageFile = req.files.image[0]
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: 'video' })
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' })
        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`
        const songData = {
            name, desc, album, image: 'imageUpload.secure_url', file: 'audioUpload.secure_url', duration: '5: 0'
        }
        const song = new songModel(songData)
        await song.save()
        return res.json({ success: true, message: "Song added" })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

//list songs
const listSongs = async (req, res) => {
    try {

    } catch (error) {

    }
}
export { addSong, listSongs }