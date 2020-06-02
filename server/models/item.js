const mongoose  = require('mongoose');
const Schema = mongoose.Schema

const Item = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required:false }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('items', Item)