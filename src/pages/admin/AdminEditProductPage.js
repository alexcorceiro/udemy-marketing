import React,{useState} from 'react'
import { Col, Container, Form, Row, Button, CloseButton , Table, Alert, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function AdminEditProductPage() {
   const [validated, setValidated] =useState("");

   const handleSubmit = (e) => {
    const form = e.currentTarget;
    if(form.checkValidity() === false){
      e.preventDefault()
      e.stopPropagation()
    }
    setValidated(true)
   }

   const onHover = {
    cursor: "pointer",
    position: "absolute",
    left: "11px",
    top: "-5px", 
    transform: "scale(2)"
   }
  return (
    <Container className='createproduct'>
      <Row className='justify-content-md-center mt-5'>
        <Col md={1}>
          <Link to="/admin/products" className='btn btn-info my-3'>
            Annuler
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit product</h1>
          <Form noValidate validated={validated}
          onSubmit={handleSubmit}>
             <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" required type="text" 
                  defaultValue="Panasonic"
                />
             </Form.Group>
          <Form.Group className="mb-3" 
          controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" 
                required as="textarea" rows={3} 
                defaultValue="Product descrition"
                />
             </Form.Group>
             <Form.Group className="mb-3" 
             controlId="formBasicCount">
                <Form.Label>élément en Stock</Form.Label>
                <Form.Control name="count" required type="number" />
             </Form.Group>
             <Form.Group className="mb-3" 
             controlId="formBasicPrice">
                <Form.Label>Prix</Form.Label>
                <Form.Control name="price" required 
                type="text" defaultValue="999$"/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>
                Category
                </Form.Label>
                <Form.Select required name="category"
                aria-label='Default select example'>
                  <option value="">Choisir la category</option>
                  <option value="1">cosplay</option>
                  <option value="2">figurine</option>
                  <option value="3">Katana</option>
                </Form.Select>
                </Form.Group>
               

                <Row className='mt-5'>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId='formBasicAtributes'>
                      <Form.Label>choisi l'atrtribue et sa valeur</Form.Label>
                         <Form.Select name='atrrKey' aria-label="Default select example">
                          <option>Choisir l'atrtribue</option>
                          <option value="red">color</option>
                         </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group  controlId='formBasicAttributeValue'>
                      <Form.Label>L'attribue Valeur</Form.Label>
                       <Form.Select name="atrrVal" aria-label="Default select example">
                        <option>Choisi l'attibue valeur</option>
                       </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Table hover>
                      <thead>
                        <tr>
                          <th>atrtribue</th>
                          <th>value</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>attr key</td>
                          <td>attr value</td>
                          <td>
                            <CloseButton/>
                          </td>
                        </tr>
                      </tbody>
                  </Table>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Create new attribue</Form.Label>
                       <Form.Control disabled={false} 
                       placeholder="first choose or create category"
                       name="newAttrValue" type="text"/>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                  <Form.Group className='mb-3'>
                      <Form.Label>attibue value</Form.Label>
                       <Form.Control disabled={false} 
                       placeholder="first choose or create category"
                       required={true}
                       name="newAttrValue" type="text"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Alert variant="primary">
                  after typing attribue key and value press entrer 
                  on one of the field
                </Alert>
                <Form.Group className="mb-3 mt-3" controlId="formFileMultiple">
                <Form.Label>Image</Form.Label>
                  <Row>
                    <Col style={{position: "relative"}} xs={3} className="mb-3">
                      <Image src="/images/playstation-category.jpg" fluid />
                      <i style={onHover} className="bi bi-x text-danger"></i>
                    </Col>
                    <Col style={{position: "relative"}} xs={3} className="mb-3">
                      <Image src="/images/playstation-category.jpg" fluid />
                      <i style={onHover} className="bi bi-x text-danger"></i>
                    </Col>
                    <Col style={{position: "relative"}} xs={3} className="mb-3">
                      <Image src="/images/playstation-category.jpg" fluid />
                      <i style={onHover} className="bi bi-x text-danger"></i>
                    </Col>
                  </Row>
                <Form.Control required type="file" multiple/>
             </Form.Group>
             <Button variant="primary" type="submit">
              Mis a jour
             </Button>
             </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminEditProductPage
