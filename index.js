require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const api = require('./api')

const app = express()
app.use(bodyParser.json())

/*CRUD*/
// Create
// Read
// Update
// Delete

app.use('/api', api)
app.get('/', async (req, res) => {
  res.status(200)
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Esto es HTML5</h1>
</body>
</html>
  `)
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port + '...'))
