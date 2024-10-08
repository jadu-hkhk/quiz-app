require('dotenv').config();

const express = require("express")
const mongoose = require('mongoose')
const quizRoutes = require('./routes/quizes')
const userRoutes = require('./routes/user')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/quizes', quizRoutes);
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(
        app.listen(process.env.PORT, () => {
            console.log(`DB is connected & listening on port ${process.env.PORT}!`)
        })
    ).catch((error) => {
        console.log(error);
    })