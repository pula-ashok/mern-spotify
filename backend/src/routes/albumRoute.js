import express from 'express'
import upload from './../middleware/multer.js';
import { addAlbum, listAlbums, removeAlbum } from '../controllers/albumController.js';

const albumRoute = express.Router()

albumRoute.post("/add", upload.single('image'), addAlbum)
albumRoute.get("/list", listAlbums)
albumRoute.delete('/remove', removeAlbum)

export default albumRoute