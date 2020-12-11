const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Ativos = new Schema({
    nome:{
        type: String,
        required: true
    },
    ticker:{
        type: String,
        required: true
    },
    codigo:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model("ativos", Ativos)

