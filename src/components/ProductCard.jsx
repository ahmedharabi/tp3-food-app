import { useState } from 'react'
import { Card, Badge } from 'react-bootstrap'

function ProductCard(props) {
  const [liked, setLiked] = useState(false)

  return (
    <Card className="product-card h-100">
      <Card.Img variant="top" src={props.product.image} />
      <Card.Body>
        <Badge bg="secondary" className="mb-2">{props.product.category}</Badge>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        <div className="card-bottom">
          <span className="price">{props.product.price} DT</span>
          <button className="like-btn" onClick={() => setLiked(!liked)}>
            {liked ? <span className="red">♥</span> : '♡'}
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
