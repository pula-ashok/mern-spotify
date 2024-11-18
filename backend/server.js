import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//configuration
const app = express()
const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors())

//initializing routes
app.get('/', (req, res) => {
    res.json('Api is working')
})

app.listen(port, () => console.log("server is running at port " + port))