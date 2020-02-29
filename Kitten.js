const mongoose = require('mongoose')
const kittySchema = require('./schemas/kitty')

mongoose.connect('mongodb://localhost/cats', {
  useUnifiedTopology: true
})

module.exports = mongoose.model('Kitten', kittySchema)
