import React, { useEffect, useState } from 'react'
import "./ProductBody.css"
import Card from '../Card/Card'
import { swiggy_url } from '../utils/constants'
import Shimmer from '../Shimmer'




function ProductBody() {

    const [product,setProduct]=useState([]);
    const [search,setSearch]=useState("");
    let [searchData,setSearchData]=useState([])


    useEffect(() => {
        let fetchData = async () => {
            let data = await fetch(swiggy_url);
            let response = await data.json()
            console.log(response);
            let sortedData=(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            console.log(sortedData);

            let allProduct=[]

            for(let i=0;i<sortedData.length;i++){
                allProduct.push(sortedData[i].info)

            }
            setProduct(allProduct);
            setSearchData(allProduct)

        }
        fetchData()
    }, [])

    if(product.length===0){
       return <Shimmer/>
    }

    let findSerchData=()=>{
        if(search==""){
            setSearchData(product)
        }
        let sortedData=product.filter((each)=>each.name.toLowerCase().includes(search.toLowerCase()));
        setSearchData(sortedData)
    }
    return (

        <>
        <input type="text" placeholder='search  here...' onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={findSerchData}>search</button>
        
        <div className='productbody-parent'>

            
            {
                searchData.map((singleProduct)=>{
                    return <Card data={singleProduct} key={singleProduct.id}/>
                })
            }
        </div>
            </>
    )
}

export default ProductBody
