import React, { useEffect } from 'react'
import "./ProductBody.css"
import Card from '../Card/Card'
import { swiggy_url } from '../utils/constants'




function ProductBody() {


    useEffect(() => {
        let fetchData = async () => {
            let data = await fetch(swiggy_url);
            let response = await data.json()
            console.log(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        }
        fetchData()
    }, [])
    return (
        <div className='productbody-parent'>

            <Card />
        </div>
    )
}

export default ProductBody
