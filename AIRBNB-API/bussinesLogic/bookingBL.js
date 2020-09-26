const BookingModel = require('./../models/bookingModel')

const bookingExperience = async (idExp, nombreUsr, mail, fecha, telefono) => {
    const bookingData = {
        idExp,
        nombreUsr, 
        mail, 
        fecha, 
        telefono
    }
    try {
        await BookingModel(bookingData).save()
        return {msg: `Señor(a) ${nombreUsr} su reserva para ${idExp} ha sido realizada, recuerde la fecha de su reserva es para ${fecha}. Enviaremos detalle a su correo ${mail}. En caso de requerir contactarlo llamaremos al número ${telefono}`}
    } catch (error) {
        throw { status: 500, msg: error }
    }
   }

module.exports = {
    bookingExperience
}