import { useState } from 'react'
import MyNavbar from './components/MyNavbar'
import CategoryFilter from './components/CategoryFilter'
import ProductList from './components/ProductList'

function App() {
  const products = [
    {
      id: 1,
      name: 'Classic Burger',
      category: 'Burgers',
      description: 'Beef, cheese, salad and tomato.',
      price: 14,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    },
    {
      id: 2,
      name: 'Double Burger',
      category: 'Burgers',
      description: 'Two beef steaks with cheddar.',
      price: 18,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500',
    },
    {
      id: 3,
      name: 'Pizza Margherita',
      category: 'Pizza',
      description: 'Tomato sauce, mozzarella and basil.',
      price: 16,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
    },
    {
      id: 4,
      name: 'Pizza Pepperoni',
      category: 'Pizza',
      description: 'Pepperoni, mozzarella and oregano.',
      price: 19,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
    },
    {
      id: 5,
      name: 'Penne Arrabbiata',
      category: 'Pasta',
      description: 'Penne with spicy tomato sauce.',
      price: 15,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
    },
    {
      id: 6,
      name: 'Pasta Salad',
      category: 'Pasta',
      description: 'Farfalle with fresh vegetables.',
      price: 13,
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500',
    },
    {
      id: 7,
      name: 'Donuts',
      category: 'Desserts',
      description: 'Chocolate donuts with sprinkles.',
      price: 7,
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500',
    },
    {
      id: 8,
      name: 'Strawberry Cups',
      category: 'Desserts',
      description: 'Cream with fresh strawberries.',
      price: 9,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500',
    },
    {
      id: 9,
      name: 'Mojito',
      category: 'Drinks',
      description: 'Fresh lime and mint cocktail.',
      price: 8,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500',
    },
    {
      id: 10,
      name: 'Iced Tea',
      category: 'Drinks',
      description: 'Cold lemon iced tea.',
      price: 6,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    },
  ]

  const [category, setCategory] = useState('All')
  const [darkMode, setDarkMode] = useState(false)

  let filteredProducts = products
  if (category !== 'All') {
    filteredProducts = products.filter((p) => p.category === category)
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <MyNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container py-4">
        <h1 className="title">🍔 Our Menu</h1>
        <CategoryFilter category={category} setCategory={setCategory} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
}

export default App
