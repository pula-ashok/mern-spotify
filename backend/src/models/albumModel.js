import mongoose from 'mongoose';

const ablumSchema = new mongoose.Schema({
    name: { type: String, require: true },
    desc: { type: String, require: true },
    bgColour: { type: String, require: true },
    image: { type: String, require: true },
})

const albumModel = mongoose.models.ablum || mongoose.model('album', ablumSchema)
export default albumModel