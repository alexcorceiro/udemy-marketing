import {Carousel} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function ProductCarrouselComponents() {
  const cursorP = {
    cursor : "pointer"
  }
  return (
    <Carousel>
    <Carousel.Item>
      <img
        crossOrigin="anonymous"
        style={{height: "300px",objectFit: "cover"}}
        className="d-block w-100"
        src="/images/carousel/carousel-1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
      <LinkContainer style= {cursorP} to="/product-details">
          <h3>First slide label</h3>
          </LinkContainer>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        crossOrigin="anonymous"
        style={{height: "300px",objectFit: "cover"}}
        className="d-block w-100"
        src="/images/carousel/carousel-2.webp"
        alt="Second slide"
      />

      <Carousel.Caption>
      <LinkContainer style= {cursorP} to="/product-details">
          <h3>second slide label</h3>
          </LinkContainer>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        crossOrigin="anonymous"
        style={{height: "300px",objectFit: "cover"}}
        className="d-block w-100"
        src="/images/carousel/carousel-3.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
      <LinkContainer style= {cursorP} to="/product-details">
          <h3>Trid slide label</h3>
          </LinkContainer>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default ProductCarrouselComponents
