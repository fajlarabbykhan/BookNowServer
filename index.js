const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
// "type": "module",
const app = express()
const port = process.env.PORT || 4000

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected with Database");
    } catch (error) {
        throw (error);
    }
}
mongoose.connection.on("disconnected", () => {
    console.log("Mongodb Disconnected");
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}`)
})