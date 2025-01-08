const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoute')

const cors = require('cors');


require('dotenv').config();

const port = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((error) => console.error("Failed to connect to MongoDB: ", error))

// Global Error Handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
})

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})