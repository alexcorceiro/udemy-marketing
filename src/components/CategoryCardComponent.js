import React from 'react'
import { Card , Button} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"

function CategoryCardComponent({category,idx}) {
    const images = [
        "/images/airpods-category.jpg",
        "/images/alexa-category.jpg",
        "/images/camera-category.jpg",
        "/images/mouse-category.jpg",
        "/images/phone-category.jpg",
        "/images/playstation-category.jpg",
    ];

  return (
    <Card style={{ width: "15rem"}}>
    <Card.Img variant='top' src={images[idx]}/>
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
            se produit est le prmeier
        </Card.Text>
        <LinkContainer to="/product-list">
        <Button variant="primary">147$</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  )
}

export default CategoryCardComponent
