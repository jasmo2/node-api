require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', async (req, res) => {
  const allKittens = Kitten.find({})
  console.log('allKittens', allKittens)
  res.json(allKittens)
})

app.post('/', async (req, res) => {
  const allKittens = Kitten.find({})
  console.log('allKittens', allKittens)
  res.json(allKittens)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port + '...'))
