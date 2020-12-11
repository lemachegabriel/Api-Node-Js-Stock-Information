const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

//////////////////////////////////////////////

const app = express();
app.use(express.json());
app.use(cors())

//////////////////////////////////////////////

mongoose.connect("mongodb://localhost/dados", {useUnifiedTopology:true, useNewUrlParser:true}).then(() => {
    console.log("conectado");
}).catch((err) => {
    console.log("falha:"+err)
})
require('./src/models/ativos')

//////////////////////////////////////////////

app.use("/api", require('./src/routes'));

app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081");
});