import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';


function ReasturantPage() {

    let {resId} = useParams()

    console.log(resId);
    useEffect(() => {

        
        fetchData()
    }, [])

    let fetchData=async()=>{
        let data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        let response=await data.json()
        console.log(response);
    }
    return (
        <div>
            ReasturantPage
        </div>
    )
}

export default ReasturantPage
