require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  const allKittens = Kitten.find({})
  console.log('allKittens', allKittens)
  res.json(allKittens)
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
