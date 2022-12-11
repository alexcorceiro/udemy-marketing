import React from 'react'
import { Alert, Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import CartItemComponent from "../../components/CartItemComponent"

function UserOrderDetailPage() {
  return (
    <Container fluid>
      <Row className='mt-4'>
        <h1>commande details</h1>
        <Col md={8}>
        <br/>
        <Row>
          <Col md={6}>
            <h2>acheter</h2>
            <b>Name</b>: Alex test <br/>
            <b>Adress</b>: test rue de la paie <br/>
            <b>Telephone</b>: 01401010 
          </Col>
          <Col md={6}>
           <h2>Methode de Payement</h2>
           <Form.Select disabled={false}>
             <option value="pp">
                Paypal
             </option>
             <option value="cod">
              Carte Banquaire (ParDefault)
             </option>
           </Form.Select>
          </Col>
          <Row>
            <Col>
              <Alert className='mt-3' variant='danger'>
                not delivred
              </Alert>
            </Col>
            <Col>
              <Alert className='mt-3' variant='success'>
                payer le 21/02/21
              </Alert>
            </Col>
          </Row>
        </Row>
          <br/>
          <h2> commande item</h2>
          <ListGroup variant='flush'>
            {Array.from({ length: 3}).map((item, idx) =>(
              <CartItemComponent item={{image: {path:"/images/airpods-category.jpg"}, name: "Product name", price: 10, count: 10, quantity:10}}
               key={idx}/>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
           <ListGroup>
              <ListGroup.Item>
              <h3>Commande sommaire</h3>
              </ListGroup.Item>
              <ListGroup.Item>
              Items prix (aprés les tax):
              <span className='fw-bold'>654$</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping:
              <span className='fw-bold'>include</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax:
              <span className='fw-bold'>4$</span>
            </ListGroup.Item>
            <ListGroup.Item className='text-danger'>
              Prix Total:
              <span className='fw-bold'>660$</span>
            </ListGroup.Item>
            <ListGroup.Item>
             <div className='d-grid gap-2'>
              <Button size="lg" variant='danger' type="button">
                commander
              </Button>
              </div>
            </ListGroup.Item>
           </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default UserOrderDetailPage
