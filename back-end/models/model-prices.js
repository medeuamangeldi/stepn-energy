const mongoose = require('mongoose');

const SchemaPrices = new mongoose.Schema({
    GST: {
        SOL: {
            USD: {
                type: Number
            },
            KZT: {
                type: Number
            }
        },
        BSC: {
            USD: {
                type: Number
            },
            KZT: {
                type: Number
            }
        }
    },
    SOL: {
        USD: {
            type: Number
        },
        KZT: {
            type: Number
        }
    },
    BNB: {
        USD: {
            type: Number
        },
        KZT: {
            type: Number
        }
    },
    GMT: {
        USD: {
            type: Number
        },
        KZT: {
            type: Number
        }
    },
    Dollar: {
        type: Number
    },
    date_added: {
        type: String
    }
})

module.exports = mongoose.model('Prices', SchemaPrices)