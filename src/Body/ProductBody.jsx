import React, { useEffect, useState } from 'react'
import "./ProductBody.css"
import Card from '../Card/Card'
import { swiggy_url } from '../utils/constants'
import Shimmer from '../Shimmer'




function ProductBody() {

    const [product,setProduct]=useState([])


    useEffect(() => {
        let fetchData = async () => {
            let data = await fetch(swiggy_url);
            let response = await data.json()
            let sortedData=(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            console.log(sortedData);

            let allProduct=[]

            for(let i=0;i<sortedData.length;i++){
                allProduct.push(sortedData[i].info)

            }
            setProduct(allProduct);

        }
        fetchData()
    }, [])

    if(product.length===0){
       return <Shimmer/>
    }
    return (
        <div className='productbody-parent'>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>

            {
                product.map((singleProduct)=>{
                   return <Card data={singleProduct} key={singleProduct.id}/>
                })
            }
        </div>
    )
}

export default ProductBody
