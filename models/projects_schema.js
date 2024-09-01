import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    }
})

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema)
