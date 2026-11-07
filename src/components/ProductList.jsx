import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'

function ProductList(props) {
  return (
    <Row>
      {props.products.map((product) => (
        <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ProductList
