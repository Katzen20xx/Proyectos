import React, {useEffect, useState} from 'react'
import { requestHttp } from '../../config/HttpRequest'
import { Title } from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from '../../components/Button'
import { FramePage } from '../FramePage'
import { useParams } from 'react-router-dom'

const buttonStyle = {
  backgroundColor: '#FC642D',
  borderColor: '#fe530c'
}

export const DetailPage = () => {

  const [experience, setExperience] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
    getExperience()
  }, [])

  const getExperience = async () => {
    try {
        const response = await requestHttp('get', `/experiences/detail/${id}`)
        setExperience(response.experience)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    
    <FramePage>
      <Title label= {experience.title} />
      <CardDetail {...experience} />
      <Button isLink={true} linkTo={`/booking/${id}`} style={buttonStyle} label='Reserva ahora!' />
    </FramePage>
  )  
}