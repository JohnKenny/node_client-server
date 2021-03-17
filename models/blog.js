const mongoose = require('mongoose');
const Schema = mongoose.Schema; // constructor function

// obj to describe structure of documents to be stored in blogs collection
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true});

// model name should be singular of the collection name
const Blog = mongoose.model('Blog', blogSchema); 

module.exports = Blog;