import React from 'react';
import { Col, Container, Row, Image, ListGroup,
Form,Button,Alert } from 'react-bootstrap';
import AddedToCartMessageComponent from '../components/AddedToCartMessageComponent';
import { Rating } from "react-simple-star-rating";
import ImageZoom from "js-image-zoom";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action/cartAction"

function ProductDetailsPage() {
  const dispatch = useDispatch()

  const addToCartHandler = () => {
      dispatch(addToCart())
  }

  const products = useSelector((state) => state.cart.value)

    var options = {
      scale: 2,
      offset: { vertical: 0, horizontal: 0}
    }

      useEffect(() => {
        new ImageZoom(document.getElementById("first"),options)
        new ImageZoom(document.getElementById("second"),options)
        new ImageZoom(document.getElementById("third"),options)
        new ImageZoom(document.getElementById("fourth"), options)
      })
  return (
    <Container className='product-details'>
    <AddedToCartMessageComponent/>
    <Row className='mt-5'>
      <Col style={{zIndex: 1}} md={2} >
       <div id='first'>
       <Image crossOrigin='anonymous'  fluid src="/images/airpods-category.jpg" />
       </div>
       <br/>
       <div id='second'>
       <Image fluid src="/images/alexa-category.jpg" />
       </div>
       <br/>
       <div id='third'>
       <Image fluid src="/images/camera-category.jpg" />
       </div>
       <br/>
       <div id='fourth'>
       <Image fluid src="/images/mouse-category.jpg" />
       </div>
       <br/>
      </Col>
      <Col md={9}>
        <Row>
          <Col md={8}>
           <ListGroup variant='flush'>
               <ListGroup.Item>
                <h1>Product name{products}</h1>
               </ListGroup.Item>
               <ListGroup.Item>
                <Rating readonly size={20}
                initialValue={4} /> (1)
               </ListGroup.Item>
               <ListGroup.Item>
                Prix : {" "}<span className='fw-bold'>
                  654$
                </span>
               </ListGroup.Item>
               <ListGroup.Item>
                <span>Description:{"  "}</span>
                la description des product
               </ListGroup.Item>
           </ListGroup>
          </Col>
          <Col md={3}>
          <ListGroup>
                <ListGroup.Item>Status: en stock</ListGroup.Item>
                <ListGroup.Item>Prix: <span>654$</span></ListGroup.Item>
                <ListGroup.Item>
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button onClick={addToCartHandler} variant="danger">Danger</Button>
                </ListGroup.Item>
              </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className='mt-5'>
            <h5> reviews</h5>
            <ListGroup variant="flush">
            {Array.from({ length: 5}).map((item,idx) => (
              <ListGroup.Item key={idx}>
               user <br/>
               <Rating readonly size={20}
               initialValue={4}/>
               <br/>
               20/04/22
               <br/>
               tres bon product
              </ListGroup.Item>
            ))}
              </ListGroup>
          </Col>
        </Row>
        <hr/>
        <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>commentaire</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>votre note</option>
              <option value="5">5(trés ben)</option>
              <option value="4">4(bien)</option>
              <option value="3">3(moyen)</option>
              <option value="2">2(mauvais)</option>
              <option value="1">1(trés mauvais)</option>
            </Form.Select>
            <Button className='mb-3 mt-3' variant="primary">
            Primar
            y</Button>
          </Form>
      </Col>
    </Row>
    </Container>
  )
}

export default ProductDetailsPage
