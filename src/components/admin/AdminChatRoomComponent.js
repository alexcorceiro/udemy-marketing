import React, { Fragment, useState } from 'react'
import { Form, Toast, Button} from 'react-bootstrap'

function AdminChatRoomComponent() {
   const [toast1,closeTost1] =useState(true)
   const close1 = () =>closeTost1(false)
   const [toast2,closeTost2] =useState(true)
   const close2 = () =>closeTost2(false)
  return (
    
    <>
      <Toast className='ms-4 mb-5 adminchat' show={toast1} onClose={close1}>
        <Toast.Header>
           <strong className="me-auto">Chatez avec test</strong>
        </Toast.Header>
        <Toast.Body>

            <div style={{ maxHeight: "250px", overflow: "auto"}}>
             {Array.from({length: 30}).map((_,idx) => (
            <Fragment key={idx}>
            <p className='bg-primary p-3 ms-4 text-light
                    rounded-pill'>
                    <b>user worte:</b>
                        hello, word ! c'est le premier message.
                    </p>
                        
                        <p>
                        <b>Admin worte:</b> 
                        hello, word ! c'est le premier message.
                        </p>
            </Fragment>
          ))}   
            </div>

            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>message :</Form.Label>
                <Form.Control as="textarea" rows={2} />
            </Form.Group>
                <Button variant="success" type="submit">
                    Répondre
                </Button>
        </Toast.Body>
      </Toast>
      <Toast className='ms-4 mb-5 adminchat' show={toast2} onClose={close2}>
        <Toast.Header>
           <strong className="me-auto">Chatez avec test</strong>
        </Toast.Header>
        <Toast.Body>

            <div style={{ maxHeight: "250px", overflow: "auto"}}>
             {Array.from({length: 30}).map((_,idx) => (
            <Fragment key={idx}>
            <p className='bg-primary p-3 ms-4 text-light
                    rounded-pill'>
                    <b>user worte:</b>
                        hello, word ! c'est le premier message.
                    </p>
                        
                        <p>
                        <b>Admin worte:</b> 
                        hello, word ! c'est le premier message.
                        </p>
            </Fragment>
          ))}   
            </div>

            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>message :</Form.Label>
                <Form.Control as="textarea" rows={2} />
            </Form.Group>
                <Button variant="success" type="submit">
                    Répondre
                </Button>
        </Toast.Body>
      </Toast>
      </>
  )
}

export default AdminChatRoomComponent
