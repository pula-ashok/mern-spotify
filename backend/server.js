import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './src/config/mongodb.js'
import connectCloudinary from './src/config/cloudinary.js'
import songRoute from './src/routes/songRoute.js'

//configuration
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//initializing routes
app.use('/api/song', songRoute)

app.get('/', (req, res) => {
    res.json('Api is working')
})

app.listen(port, () => console.log("server is running at port " + port))