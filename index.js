const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({ path: "config.env" })
app.use(cors());
app.use(express.json())
const PORT = 5000
app.listen(PORT, () =>
 console.log(`Server started in development mode on port ${PORT}`)
)