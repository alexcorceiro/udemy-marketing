import { Card, Button, Col , Row} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import {LinkContainer} from "react-router-bootstrap"

function ProductFortListComponents({images, idx}) {
  return (
    <Card style={{ marginTop: "20px", marginBottom: "30px", height: "12.2rem"}}>
    <Row>
         <Col lg={4}>
         <Card.Img variant="top" src={"/images/" + images[idx] + "-category.jpg"} />
         </Col>
         <Col lg={8}>
         <Card.Body>
        <Card.Title>Card Title</Card.Title>
       <Card.Text>
       Some quick example text to build on the card title and make up the
       bulk of the card's content.
     </Card.Text>
    <Card.Text> 
     <Rating readonly size={17} initialValue={3.2} />(2)
     </Card.Text> 
     <LinkContainer to="/product-details/:id">
      <Button  variant="primary">100$</Button>
      </LinkContainer>
     </Card.Body>
         </Col>
    </Row>
  
 </Card>
  )
}

export default ProductFortListComponents
