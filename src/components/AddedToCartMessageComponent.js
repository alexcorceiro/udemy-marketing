import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AddedToCartMessageComponent() {
  const [show, setShow] = useState(true);


    return (
      <Alert show={show}variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
            the product was added to your cart!
        </Alert.Heading>
        <p>
         <Button variant='success'>go back</Button>{" "}
         <Link to="/cart">
            <Button variant='danger'>go to cart</Button>
         </Link>
        </p>
      </Alert>
    );
  }

export default AddedToCartMessageComponent;