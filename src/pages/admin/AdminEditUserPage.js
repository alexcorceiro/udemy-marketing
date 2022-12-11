import React,{useState} from 'react'
import { Col, Container, Form, Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function AdminEditUserPage() {
   const [validated, setValidated] =useState("");

   const handleSubmit = (e) => {
    const form = e.currentTarget;
    if(form.checkValidity() === false){
      e.preventDefault()
      e.stopPropagation()
    }
    setValidated(true)
   }

  return (
    <Container className='edituser'>
      <Row className='justify-content-md-center mt-5'>
        <Col md={1}>
          <Link to="/admin/users" className='btn btn-info my-3'>
            Annuler
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit Utilisateur</h1>
          <Form noValidate validated={validated}
          onSubmit={handleSubmit}>
             <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" required type="text" 
                  defaultValue="test"
                />
             </Form.Group>
          <Form.Group className="mb-3" 
          controlId="formBasicLastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control name="lastname" 
                required type="text"  
                defaultValue="test"
                />
             </Form.Group>
             <Form.Group className="mb-3" 
             controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" required type="email"
                defaultValue="test@gmail.com"/>
             </Form.Group>

             <Form.Group>
              <Form.Check name="isAdmin" type="checkbox" label="est admin" />
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

export default AdminEditUserPage
