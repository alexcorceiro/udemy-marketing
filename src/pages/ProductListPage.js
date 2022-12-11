import {Container, Row,Col,ListGroup, Button} from "react-bootstrap"
import AttributesFilterComponent from "../components/filterQueryResultOption/AttributesFilterComponent"
import CategoryFilterComponent from "../components/filterQueryResultOption/CategoryFilterComponent"
import PriceFilterComponent from "../components/filterQueryResultOption/PriceFilterComponent"
import RatingFilterComponent from "../components/filterQueryResultOption/RatingFilterComponent"
import PaginationComponents from "../components/PaginationComponents"
import ProductFortListComponents from "../components/ProductFortListComponents"
import SortOptionsComponents from "../components/SortOptionsComponents"
import axios from "axios";

function ProductListPage() {
  axios.get("/api/products")
        .then((res) => console.log(res))
  return (
    <Container fluid>
    <Row>
      <Col md={2}>
        <ListGroup variant="flush">
          <ListGroup.Item className="mb-2 mt-2"><SortOptionsComponents/></ListGroup.Item>
          <ListGroup.Item>filtrer : <br/><PriceFilterComponent/></ListGroup.Item>
          <ListGroup.Item><RatingFilterComponent/></ListGroup.Item>
          <ListGroup.Item><CategoryFilterComponent/></ListGroup.Item>
          <ListGroup.Item>
            <AttributesFilterComponent/>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="primary">enregistrer</Button>
            <Button variant="danger">reset</Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={5} style={{marginLeft: "10rem", marginBottom: "8rem"}}>
      {Array.from({ length: 4 }).map((_, idx) => (
            <ProductFortListComponents
              key={idx}
              images={["airpods", "alexa", "camera", "mouse", "playstation"]}
              idx={idx}
            />
          ))}
        <PaginationComponents/>
      </Col>
    </Row>
  </Container>
  )
}

export default ProductListPage
