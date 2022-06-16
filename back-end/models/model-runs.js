const mongoose = require('mongoose');

const SchemaRuns = new mongoose.Schema({
    realm: {
        required: true,
        type: String
    },
    sneakerType: {
        required: true,
        type: String
    },
    sneakerRarity: {
        required: true,
        type: String
    },
    sneakerLevel: {
        required: true,
        type: Number
    },
    gstEarned: {
        required: true,
        type: Number
    },
    energySpent: {
        required: true,
        type: Number
    },
    durability: {
        required: true,
        type: Number
    },
    eff: {
        required: true,
        type: Number
    },
    res: {
        required: true,
        type: Number
    },
    luck: {
        required: true,
        type: Number
    },
    misteryBox: {
        required: true,
        type: Boolean
    },
    misteryBoxLevel: {
        type: Number
    },
    dateAdded: {
        type : Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Runs', SchemaRuns)