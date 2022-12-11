import React, { useState } from 'react';
import { Container, Row , Col, Form,Button, Spinner, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChange = () => {
    const password = document.querySelector("input[name=password]")
    const confirm = document.querySelector("inptut[name=confirmPassword]")
    if(confirm.value === password.value) {
      confirm.setCustomValidity("")
    }else{
      confirm.setCustomValidity("password n'est pas le meme")
    }
  }
  return (
   <Container className="register">
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
        <h1>Register</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group  className="mb-3" controlId="formBasicFirstName">
          <Form.Label>prenom: </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entre votre prenom"
            name="name"
          />
          <Form.Control.Feedback type="invalid">
          veuillez entre prenom correct !!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicLastName">
          <Form.Label>nom: </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enrter votre nom"
            name="lastName"
          />
          <Form.Control.Feedback type="invalid">
          veuillez entre nom correct !!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enrter votre email"
            name="email"
          />
          <Form.Control.Feedback type="invalid">
          veuillez entrer email correct !!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe: </Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enrter votre mot de passe"
            name="password"
            minLength={8}
            onChange={onChange}
          />
          <Form.Control.Feedback type="invalid">
          veuillez mot de passe est correct !!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicPasswordRepeat">
          <Form.Label>Comfirme password : </Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="comfirmer mot de passe"
            name="confirmPassword"
            minLength={8}
          />
          <Form.Control.Feedback type="invalid">
          votre mot de passe n'est pas le meme
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="pb-2">
          <Col>
           Vous avez déja un compte ?
           <Link to={"/login"}>{"  "}
              login         
           </Link>
          </Col>
        </Row>
        
      <Button type="submit">
      <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      Crée un compte</Button>
      <Alert show={true} variant="danger">
        utilisateur déja existant !!
      </Alert>
      <Alert show={true} variant="info">
        utilisateur crée !!
      </Alert>
    </Form>
    </Col>
      </Row>
   </Container>
  )
}

export default RegisterPage
