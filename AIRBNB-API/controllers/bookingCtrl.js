const {
    bookingExperience
} = require('./../bussinesLogic/bookingBL')

const booking = async (req, res) => {
    const {
        idExp,
        nombreUsr, 
        mail, 
        fecha, 
        telefono
    } = req.body
    try {
        //res = bookingExperience(idExp, nombreUsr, mail, fecha, telefono)
        const response = await bookingExperience(idExp, nombreUsr, mail, fecha, telefono)
        res.json(response)
    } catch (error) {
        res.status(error.status).send(error.msg)
    }
    
} 

module.exports = {
    booking
}