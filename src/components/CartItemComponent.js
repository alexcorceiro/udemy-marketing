import React from 'react'
import { Col, ListGroup,Row,Image, Form, Button } from 'react-bootstrap'

function CartItemComponent({ item, orderCreated = false }) {
  return (
    <>
        <ListGroup.Item>
            <Row>
              <Col md={2}>
                <Image crossOrigin='anonymous'
                src={item.image ? item.image.path ?? null : null} fluid/>
              </Col>
              <Col md={2}>
                <b> b{item.name}</b>
              </Col>
              <Col md={2}>
                  <b>{item.price}$</b>
              </Col>
              <Col md={3}>
                 <Form.Select disabled={orderCreated} value={item.quantity}>
                    {[...Array(item.count).keys()].map((x) => (
                      <option key={x+1} value={x+1}>{x+1}</option>
                    ))}
                 </Form.Select>
              </Col>
              <Col md={3}>
                <Button type="button"
                variant="secondary" onClick={()=>
                window.confirm("ète vous sur ?")}><i
                className="bi bi-trash">   
                </i></Button>
              </Col>
            </Row>
        </ListGroup.Item>
    </>
  )
}

export default CartItemComponent
