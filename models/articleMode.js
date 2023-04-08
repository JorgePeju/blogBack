const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

ArticleSchema.plugin(mongoosePaginate)

module.exports = model('Article', ArticleSchema)