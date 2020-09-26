import React from 'react'

export const CardDetail = ({image, description}) => {

  return (
    <article className='card-detail'>
      <img src= {image} />
      <p>
        {description}
      </p>
    </article>
  )
}