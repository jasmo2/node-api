require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Kitten = require('./Kitten')

const app = express()
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  const allKittens = await Kitten.find({})
  console.log('allKittens', allKittens)
  res.status(200).json({ kittens: allKittens })
})

app.post('/', async (req, res) => {
  console.log('req.body', req.body)
  // try {
  //   const kitten = new Kitten({})
  //   await kitten.save()
  //   res.status(200)
  //   res.json({ ok: 'sucessfully created new kitty' })
  // } catch (err) {
  //   res.status(500)
  //   res.json({ error: `error saving: ${err}` })
  // }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port + '...'))
