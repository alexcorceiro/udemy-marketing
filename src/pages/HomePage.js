import { Row , Container} from 'react-bootstrap';
import CategoryCardComponent from '../components/CategoryCardComponent';
import ProductCarrouselComponents from '../components/ProductCarrouselComponents';

function HomePage() {
  const categorie = [
    "livre" ,"figurine","cosplay","katana", "poster", "masque"
  ]
  return (
    <>
      <>
    <ProductCarrouselComponents/>
    <Container>
    <Row xs={1} md={2} className="g-4 mt-5">
    {categorie.map((category, idx) => 
    <CategoryCardComponent key={idx}
    category={category} idx={idx} />)  }
    </Row>
    </Container>
    </>
    </>
  )
}

export default HomePage
