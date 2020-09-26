import React, { useEffect, useState } from 'react'
import { requestHttp } from '../../../config/HttpRequest'
import { Card } from './Card'

export const Ranking = () => {

    const [top5, setTop5] = useState([])

    useEffect(() => {
        getTopExperiences()
    }, [])    
 
    const getTopExperiences = async () =>  {
        try {
            const response = await requestHttp('get', '/experiences/top5')
            setTop5(response.top5) 
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="ranking">
            {
                top5.map(el => <Card key={el._id} {...el} />)
            }
            {
                //posts.map(el => <Card key={el.id} image={el.image} description={el.description} place={el.place} />)
            }
        </section>
    )
}