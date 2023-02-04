import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {
const urlParams= useParams()
// console.log(urlParams);

const [restaurantlist,setRestaurantlist]=useState([])

//create function to call API

const getRestaurant=async()=>{

    await fetch('/restaurants.json') //Async call
    .then((data)=>data.json()
        .then((result)=>setRestaurantlist(result.restaurants)))
        // console.log(data);
}
// console.log(restaurantlist);
useEffect(()=>{
    getRestaurant();
},[])

// eslint-disable-next-line eqeqeq
const viewrest = restaurantlist.find(item=>item.id==urlParams.id)
console.log(viewrest);

  return (
    <div>
      {
        viewrest?(
          <Row className="m-4">
          <Col md={3}>
          <Image src={viewrest.photograph} fluid/>
          </Col>
          <Col md={7} >
          <h2>{viewrest.name}</h2>

          <ListGroup>
      <ListGroup.Item variant='dark'>Id :{viewrest.id}</ListGroup.Item>
      <ListGroup.Item variant='dark'>Name :{viewrest.name}</ListGroup.Item>
      <ListGroup.Item variant='dark'>Address :{viewrest.address}</ListGroup.Item>
      <ListGroup.Item variant='dark'>cuisine_type :{viewrest.cuisine_type}</ListGroup.Item>
      <ListGroup.Item variant='dark'>Neighborhood :{viewrest.neighborhood}</ListGroup.Item>
    </ListGroup>
 
    
     <Restop op={viewrest.operating_hours}/>   
     <Restreview reviews={viewrest.reviews} />
          </Col>
        </Row>
        ):null
       
      }
    </div>
  )
}

export default Viewrest
