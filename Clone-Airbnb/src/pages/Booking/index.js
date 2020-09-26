import React, { useState, useEffect } from 'react'
import { FramePage } from './../FramePage'
import { Button } from './../../components/Button'
import { useParams } from 'react-router-dom'
import { requestHttp } from './../../config/HttpRequest'

export const BookingPage = () => {

    const { id } = useParams()
    const idExp = id
    const [nombreUsr, setName] = useState('')
    const [telefono, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [fecha, setDate] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)
    
    const bookingHandler = (e) => {
        e.preventDefault()
        requestBooking();
    }

    const requestBooking = async () => {
        const body = {
            idExp,
            nombreUsr, 
            mail,
            fecha, 
            telefono
        }
        console.log('body', body)
        try {
            const response = await requestHttp('post', '/booking', body) 
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        

    }

    // component did mount
    useEffect(() => {
        // http
    }, [])
    
    useEffect(() => {
        setIsValidForm(nombreUsr !== '' && telefono !== '' && mail !== '' && fecha !== '')
    }, [nombreUsr, telefono, mail, fecha])

    return (
        <FramePage>
            <form onSubmit={bookingHandler} className="booking-form">
                <div>
                    <label>Nombre:</label>
                    <input value={nombreUsr} onChange={e => setName(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input value={telefono} onChange={e => setPhone(e.target.value)} type="tel" />
                </div>
                <div>
                    <label>Correo:</label>
                    <input value={mail} onChange={e => setMail(e.target.value)} type="email" />
                </div>
                <div>
                    <label>Fecha de reserva:</label>
                    <input value={fecha} onChange={e => setDate(e.target.value)} type="date" />
                </div>
                <Button disabled={!isValidForm} type="submit" label="Reservar ahora" />                
            </form>
        </FramePage>
    )
}