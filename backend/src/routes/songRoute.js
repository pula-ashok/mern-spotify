import express from "express";
import { addSong, listSongs, removeSong } from "../controllers/songController.js";
import upload from "../middleware/multer.js";

const songRoute = express.Router()

songRoute.post('/add', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), addSong)
// songRoute.post('/add', addSong)
songRoute.get('/list', listSongs)
songRoute.delete('/remove', removeSong)

export default songRoute