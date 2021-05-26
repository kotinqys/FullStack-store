const express = require('express')
const sequalize = require('./db.js')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/deviceRoute')

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())
app.use(fileUpload())
app.use('/api',router)


const start = async () => {
    try {
        await sequalize.authenticate()
        await sequalize.sync()
        app.listen(PORT, () => {
            console.log(`SERVER STARTED ON ${PORT} PORT`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()

