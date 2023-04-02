const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({

    titulo: {
        type: String,
        required: true,
        trim: true
    },
    extracto: {
        type: String,
        required: true,
        trim: true
    },
    cuerpo: {
        type: String,
        required: true,
        trim: true
    },

    fecha: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Article', ArticleSchema)