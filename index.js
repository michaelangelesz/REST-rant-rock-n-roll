// 1. Require express at the top of the file

// 2. Initialize the app variable

// 3. Create the home page route
//    a. Call app.get()
//    b. Set ‘/‘ as the path (first arg)
//    c. Write callback function with req, res
//    d. Call res.send(‘hello world’) 

// 4. Call app.listen(8080) to keep server open

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(8080)
