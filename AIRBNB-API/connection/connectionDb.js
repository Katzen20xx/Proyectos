const mongoose = require('mongoose')

const url = 'mongodb+srv://db_airbnbApp:ApiTest.2020@katzecluster.zwkpm.mongodb.net/db_cloneAirbnb?authSource=admin&replicaSet=atlas-5bl5mr-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', () => console.error('Error connecting with database'))
db.once('open', () => console.log('Connection with mongo success'))

module.exports = db