import React,{useState, useEffect }from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import AdminLinksComponent from '../../components/admin/AdminLinksComponent';
import axios from "axios";

function AdminOderPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const abctrl = new AbortController()
    fetchOrders(abctrl)
  },[])

  const fetchOrders = async(abctrl) => {
    const response = await axios.get("/api/orders/admin");
    setOrders(response.data)
  }

  return (
    <Row className='userOrder m-5'>
     <Col md={2}>
      <AdminLinksComponent/>
     </Col>
      <Col md={10}>
        <h1>mes commendes</h1>

        <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Utilisateur</th>
          <th>Date</th>
          <th>ToTal</th>
          <th>delivrer</th>
          <th>methode de Payement</th>
          <th>commende details</th>
        </tr>
      </thead>
      <tbody>
       {orders.map((order,idx) => (
        <tr key={order._id}>
          <td>{idx +1 }</td>   
          <td>
           {order.user !== null ? (
            <>
            {order.user.name} {order.user.lastName}
            </>
           ) : null}
           
          </td>
          <td>{order.createdAt.substring(0, 10)} </td>
          <td>{order.orderTotal.cartSubtotal} </td>
          <td>
          {order.isDelivered ? <i className="bi bi-check-lg text-success"></i>: 
          <i className="bi bi-x-lg text-danger"></i>}
          </td>
          <td>{order.paymentMethod}</td>
          <td>
            <Link to={`/admin/order-details/${order._id}`}>voir la commande</Link>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
      </Col>
    </Row>
  )
}

export default AdminOderPage
