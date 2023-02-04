import React from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Restcard({restaurant}) {
    console.log(restaurant);
  return (
    <Col className='mt-4' sm={12} md={6} lg={4} xl={3}>

    <Link to={`viewrest/${restaurant.id}`} style={{textDecoration:"none",color:"white"}}>
        <Card style={{ width: '18rem'}}>
      <Card.Img  className='p-2' variant="top" src={restaurant.photograph}  />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          {restaurant.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>
    </Link>
    </Col>

   
  )
}

export default Restcard
