const express = require('express')
const app = express()
const port = 3000

app.get('/news', (req, res) => {
    console.log("app is debuging");
  res.send('Hello World! The first my web site')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})