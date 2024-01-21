import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function ReasturantPage() {

    let [product, setProduct] = useState([])

    let { resId } = useParams()

    console.log(resId);
    useEffect(() => {


        fetchData()
    }, [])

    let fetchData = async () => {
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        let response = await data.json()
        let sortedOne = (response.data.cards[0].card.card.info);
        setProduct(sortedOne)

    }
    console.log(product);



    return (
        <div className='resturant'>
            <h4>{product.name}</h4>
            <h4>{product.areaName}</h4>
            <h4>{product.city}</h4>
            <h4>{product.costForTwoMessage}</h4>
            <h4>{product.cuisines}</h4>



        </div>
    )
}

export default ReasturantPage
