/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Restcard from './Restcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurantlist() {

const [restaurantlist,setRestaurantlist]=useState([])

//create function to call API

const getRestaurant=async()=>{

    await fetch('/restaurants.json') //Async call
    .then((data)=>data.json()
        .then((result)=>setRestaurantlist(result.restaurants)))
        // console.log(data);
}
console.log(restaurantlist);
useEffect(()=>{
    getRestaurant();
},[])



 return (
    <Row>
      {
         restaurantlist.map(item=>(
          <Restcard  restaurant={item}/>
        ))
       
      }
    </Row>
   
  )
}
export default Restaurantlist
