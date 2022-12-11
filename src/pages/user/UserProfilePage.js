import React, { useState } from 'react';
import { Container, Row , Col, Form,Button, Alert} from 'react-bootstrap'


function UserProfilePage() {
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
   <Container className="userprofile">
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
        <h1>Mon profile</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group  className="mb-3" controlId="formBasicFirstName">
          <Form.Label>prenom: </Form.Label>
          <Form.Control
            required
            type="text"
            defaultValue="Alex"
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
            defaultValue="Corceiro"
            name="lastName"
          />
          <Form.Control.Feedback type="invalid">
          veuillez entre nom correct !!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            disabled
            value="test@gmail.com voullez vous changer d'adress email "
          />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicPhone">
          <Form.Label>Numero de telephone :</Form.Label>
          <Form.Control
            type="text"
            placeholder="entrer votre numero de telephone"
            defaultValue=""
          />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicAddress">
          <Form.Label>adress :</Form.Label>
          <Form.Control
            type="text"
            placeholder="entrer votre adress"
            defaultValue=""
          />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicCountry">
          <Form.Label>region :</Form.Label>
          <Form.Control
            type="text"
            placeholder="entrer votre region"
            defaultValue=""
          />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicZip">
          <Form.Label>Zip Code :</Form.Label>
          <Form.Control
            type="text"
            placeholder="entrer votre Zip code"
            defaultValue=""
          />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicCity">
          <Form.Label>ville :</Form.Label>
          <Form.Control
            type="text"
            placeholder="entrer votre ville"
            defaultValue=""
          />
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

       
        
      <Button variant='primary' type="submit">enregistrer</Button>
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

export default UserProfilePage;
