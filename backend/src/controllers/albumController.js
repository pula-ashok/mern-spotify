import { v2 as cloudinary } from 'cloudinary'
import albumModel from './../models/albumModel.js';
//add album

const addAlbum = async (req, res) => {
    try {
        const name = req.body.name
        const desc = req.body.name
        const bgColour = req.body.bgColour
        // const imageFile = req.file
        // const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' })
        const songData = new albumModel({
            name,
            desc,
            bgColour,
            // image: imageUpload.secure_url
        })
        await songData.save()
        return res.json({ success: true, message: 'Album added' })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}
//list album
const listAlbums = async (req, res) => {
    try {
        const albums = await albumModel.find({})
        return res.json({ success: true, albums })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}
//remove album
const removeAlbum = async (req, res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id)
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}
export { addAlbum, listAlbums, removeAlbum }