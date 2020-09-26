import React from 'react'
import { Link } from 'react-router-dom'
import { Score } from '../../../components/Score'

export const Housing = ({_id, score, users, title, image, place}) => (
    <section className="housing">
        <Link to={`/detail/${_id}`}>        
            <img src={image} />
        </Link>
        
        <div>
            <h3>{ title }</h3> 
            <h6>{ place }</h6>
            <Score score={score} users={users} />
        </div>        
        
    </section>
)