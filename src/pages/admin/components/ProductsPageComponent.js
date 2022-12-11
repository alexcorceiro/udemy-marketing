import React , {useState, useEffect} from "react"
import { Row, Col, Table, Button} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";


function ProductsPageComponent({fetchProducts, deleteProducts}) {
  const [products, setProducts] = useState([])
  const [productdelete, setProductdelete] = useState(false);

  useEffect(() => {
    const abctrl = new AbortController()
    fetchProducts(abctrl)
    .then((res) => setProducts(res))
    .catch((er) => 
    setProducts([ 
        {name: er.response.data.message ? er.response.data.message : er.reponse.data}
    ] ))
    return () => abctrl.abort()
  },[productdelete])

  const deleteHandler = async(productId) => {
    if (window.confirm("Are you sure?")){
        const data = await deleteProducts(productId)
        if(data === 'user remove') {
          setProductdelete(!productdelete)
        }
      };
  }
 
  return (
    <Row className="m-5 productlist">
      <Col md={2}>
      <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Produit List{" "}
          <LinkContainer to="/admin/create-new-product">
            <Button variant="primary" size="lg">
            Ajouter un élément
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom du Produit</th>
              <th>Prix</th>
              <th>Category</th>
              <th>Edit/Supprimer</th> 
            </tr>
          </thead>
          <tbody>
            {products.map((product,idx) => (
              <tr key={product._id}>
                <td>{idx + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <LinkContainer to={`/admin/edit-product/${product._id}`}>
                    <Button className="btn-sm">
                     <i className="bi bi-pencil-square"></i> 
                    </Button>
                  </LinkContainer>{" / "}
                  <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(product._id)}>
                  <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default ProductsPageComponent
