import {Container, Row, Col} from "react-bootstrap";

function FooterComponent() {
  return (
    <footer>
    <Container fluid>
    <Row className='mt-5'>
      <Col className='bg-dark text-white text-center p-5'>
      copyright &copy; best online shop
      </Col>
    </Row>
  </Container>
  </footer>
  )
}

export default FooterComponent
