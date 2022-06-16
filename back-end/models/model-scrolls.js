const mongoose = require('mongoose');

const SchemaScrolls = new mongoose.Schema({
    OpenedMisteryBoxLevel: {
        type: Number
    },
    ScrollDropped: {
        type: Boolean
    },
    ScrollRarity: {
        type: String
    },
    dateAdded: {
        type : Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Scrolls', SchemaScrolls)