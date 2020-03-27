const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Kitten = require('./Kitten')

router.get('/', async (req, res) => {
  const allKittens = await Kitten.find({})
  console.log('allKittens', allKittens)
  res.status(200).json({ kittens: allKittens })
})

router.post('/', async (req, res) => {
  const kittenData = req.body
  console.log('kittenData', kittenData)
  try {
    const kitten = new Kitten(kittenData)
    await kitten.save()
    res.status(200)
    res.json({ ok: 'sucessfully created new kitty' })
  } catch (err) {
    res.status(500)
    res.json({ error: `error saving: ${err}` })
  }
})

module.exports = router
