//imports '.require()'
require('dotenv').config();

const express = require('express');
const contactRouter = require ('./routes/contact-route')

const server = express();

const cors = require('cors');

const allowedOrigins = [
  process.env.ALLOWED_ORIGIN,
  "http://localhost:3000",
];

server.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS policy: This origin is not allowed'));
    }
  }
}));

server.use(express.json()); // parse JSON body

server.use("/api", contactRouter)

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});