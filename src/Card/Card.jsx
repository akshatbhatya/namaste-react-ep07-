import React from 'react'
import "./Card.css"
import { image_link } from '../utils/constants'
            

function Card({data}) {
  const{name,cloudinaryImageId,locality,areaName,costForTwo,cuisines,avgRating,sla}=data;
  return (
    <div className='card_parent'>
        <div className="card_img">
            <img src={image_link+cloudinaryImageId} alt={image_link} />
        </div>
        <div className="content">
            <h4>Name : {name}</h4>
            <h4>Area :{areaName}</h4>
            <h4>locality: {locality}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>price :{costForTwo}</h4>
            <h4>Rating :{avgRating}</h4>
            <h4>Delivery time :{sla.deliveryTime}</h4>
        </div>
      
    </div>
  )
}

export default Card
