import { Button } from 'react-bootstrap'

function CategoryFilter(props) {
  const categories = ['All', 'Burgers', 'Pizza', 'Pasta', 'Desserts', 'Drinks']

  return (
    <div className="filters">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={props.category === cat ? 'warning' : 'outline-warning'}
          className="m-1"
          onClick={() => props.setCategory(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  )
}

export default CategoryFilter
