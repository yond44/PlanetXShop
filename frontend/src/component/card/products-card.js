import React from 'react'
import { Card } from 'react-bootstrap'

function CardComponent(props) {
  return (

    <Card
    style={{
      width: "18rem",
    }}
    className="my-2 card-product rouded card-component"
  >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>

        <Card.Text><h2><b>{props.name}</b></h2></Card.Text>
        <Card.Text>
          Quantity  : {props.quantity}
        </Card.Text>
        <Card.Text>
          Price  : Rp {props.price}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default CardComponent