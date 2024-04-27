import mongoose from "mongoose";

const { Schema } = mongoose

const articlSchema = Schema({
    title: String,
    content: String,
    date: {
        type: Date, default: Date.now
    },
    image: String
})

const Article = mongoose.model('Article', articlSchema)

export { Article }