// Importing modules
const express = require('express')
const path = require('path')
const { OPENCAGE_API_KEY } = require("./config/secrets")


// Define the express app
const app = express()
const port = 3000

// Seting the EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

console.log(OPENCAGE_API_KEY)
app.get('/', (req, res) => {
    res.render('/', {data: OPENCAGE_API_KEY})
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})