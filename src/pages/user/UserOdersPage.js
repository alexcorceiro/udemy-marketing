import React from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function UserOdersPage() {
  return (
    <Row className='userOrder'>
      <Col md={12}>
        <h1>mes commendes</h1>

        <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Utilisateur</th>
          <th>Date</th>
          <th>ToTal</th>
          <th>delivrer</th>
          <th>commende details</th>
        </tr>
      </thead>
      <tbody>
       {["bi bi-check-lg text-success","bi bi-x-lg text-danger"].map((item,idx) => (
        <tr key={idx}>
          <td>{idx +1 }</td>
          <td>alex corceiro</td>
          <td>2022/01/22</td>
          <td>554$</td>
          <td>
            <i className={item}></i>
          </td>
          <td>
            <Link to="/user/order-details">voir la commande</Link>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
      </Col>
    </Row>
  )
}

export default UserOdersPage
