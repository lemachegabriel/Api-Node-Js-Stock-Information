const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Stocks = new Schema({
    
        name:{
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
        },
        start_price: {
            type: Number,
            required: false
        },
        current_price: {
            type: Number,
            required: false
        }
    
})

mongoose.model("stocks_information", Stocks)

