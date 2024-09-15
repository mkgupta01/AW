const express = require('express');
const cors = require('cors')
const faqRoute = require('./routes/faqsRoute')

const app = express();

//middleware
app.use(cors({
    credentials: true, 
    origin: true, 
    exposedHeaders: '*'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routes
app.use("/api/v1", faqRoute);

module.exports = app
