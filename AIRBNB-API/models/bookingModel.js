const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    nombreUsr: String,
    mail: String,
    telefono: String,
    fecha: Date, 
    idExp: String   
})

const BookingModel = mongoose.model('bookings', BookingSchema)

module.exports = BookingModel 