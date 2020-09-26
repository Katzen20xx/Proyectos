import React, { useEffect, useState } from 'react'
import { requestHttp } from '../../../config/HttpRequest'
import { Housing } from './Housing'

export const Experiences = () => {

    const [experiences, setExperiences] = useState([])  // Hook para que la variable perdure en toda la solución

    useEffect(() => {
        getAllExperiences()
    }, [])  // Llave vacias es la forma que indica al flujo que solo se ejecute una vez
    
    const getAllExperiences = async () => {
        try {
            const response = await requestHttp('get', '/experiences')
            setExperiences(response.experiences)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="experiences">
            {
                experiences.map(el => <Housing key={el.id} {...el} />)
            }
        </section>
    )
}