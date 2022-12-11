import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

function AdminLinksComponent() {
  return (
    <Navbar bg="ligth" variant="light">
    <Nav  className="flex-column">
    <LinkContainer to="/admin/orders">
        <Nav.Link>Commande</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/admin/products">
        <Nav.Link>Products</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/admin/users">
        <Nav.Link>Users</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/admin/chats">
        <Nav.Link>Chat</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/admin/analytics">
        <Nav.Link>analyse</Nav.Link>
    </LinkContainer>
    <Nav.Link>se deconnecter</Nav.Link>
  </Nav></Navbar>
  )
}

export default AdminLinksComponent
