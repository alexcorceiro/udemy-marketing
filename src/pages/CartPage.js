import React from 'react'
import { Alert, Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap";
import CartItemComponent from '../components/CartItemComponent';

function CartPage() {
  return (
    <Container fluid className="cartpage">
    <Row className='mt-4'>
     <Col md={8}>
      <h1>panier achat</h1>
      <ListGroup variant='flush'>
      {Array.from({length: 3}).map((idx,item) => (
        <CartItemComponent item={{image: {path:"/images/airpods-category.jpg"}, name: "Product name", price: 10, count: 10, quantity:10}} 
        key={idx}/>
      ))}
      </ListGroup>
      <Alert variant='info'>
        your cart is empty
      </Alert>
     </Col>
     <Col md={4}>
       <ListGroup>
        <ListGroup.Item>
        <h3>vos achats</h3> 
        </ListGroup.Item>
        <ListGroup.Item>
          Prix: <span className='fw-bold'>658$</span>
        </ListGroup.Item>
        <ListGroup.Item>
        <LinkContainer to="/user/cart-details">
          <Button type="buttom">
            valider 
          </Button>
          </LinkContainer>
        </ListGroup.Item>
       </ListGroup>
     </Col>
    </Row>
    </Container>
  )
}

export default CartPage
