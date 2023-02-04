
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';


function Restreview({reviews}) {
    const [open, setOpen] = useState(false);
  return (

      reviews.map(items=>(
  <Card style={{ width: '15rem', float:'right' }} className='border m-4'>
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{items.date}</Card.Subtitle>
        <Card.Text>
          Rating : {items.rating}
        </Card.Text>
        <Card.Text>
        <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         {items.comments}
        </div>
      </Collapse>
    </>

        </Card.Text>
      </Card.Body>
    </Card>
      ))
    
  )
}

export default Restreview
