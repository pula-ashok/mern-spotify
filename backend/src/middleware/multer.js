import multer from 'multer'

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(file.originalname)
    }
})

const upload = multer({ storage })

export default upload