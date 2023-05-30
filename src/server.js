const express = require("express")
require("dotenv").config
const app = express()

const port = process.env.PORT;

app.use(express.json())

app.get("/health", (req, res) => {
    res.status(200).send({
        message: "api is working"
    })
})

require("./db/connection")

app.listen(port, () => {
    console.log(`Server is listening on port 5001`)
})