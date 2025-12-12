//imports '.require()'
require('dotenv').config();

const express = require('express');
const contactRouter = require ('./routes/contact-route')

const server = express();

const cors = require('cors');

server.use(cors({
    origin: [
        process.env.ALLOWED_ORIGIN,
        "http://localhost:3000"
    ]}
))

server.use(express.json()); // parse JSON body

server.use("/api", contactRouter)

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});