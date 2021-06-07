const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

//////////////////////////////////////////////

const app = express();
app.use(express.json());
app.use(cors())

//////////////////////////////////////////////

mongoose.connect("mongodb://localhost/data", {useUnifiedTopology:true, useNewUrlParser:true, autoIndex:false}).then(() => {
    console.log("sucsess");
}).catch((err) => {
    console.log("error:"+err)
})
require('./src/models/stock')

//////////////////////////////////////////////

app.use("/api", require('./src/routes'));

app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081");
});



