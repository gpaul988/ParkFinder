const express = require('express')
const app = express()


//routes

app.get('/', function (req, res) {
    res.send('Hello Parkfinder')
  })

app.listen(3000, ()=> {
    console.log('Node API app is running on port 3000')
})