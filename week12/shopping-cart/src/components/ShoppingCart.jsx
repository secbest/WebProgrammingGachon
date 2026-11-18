import { useState } from 'react'
import ProductList from './ProductList.jsx'
import CartPanel from './CartPanel.jsx'
import { products } from './products.js'
import './shopping-cart.css'

// ShoppingCart = product list + cart panel. Cart state is an array of { id, qty }.
export default function ShoppingCart() {
  const [cart, setCart] = useState([])

  const addToCart = (id) =>
    setCart((items) =>
      items.some((item) => item.id === id)
        ? items.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
        : [...items, { id, qty: 1 }],
    )

  const removeFromCart = (id) => setCart((items) => items.filter((item) => item.id !== id))

  // + / - per item; dropping to 0 removes the line.
  const changeQty = (id, delta) =>
    setCart((items) =>
      items
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0),
    )

  return (
    <section aria-label="Shopping cart">
      <p className="muted">
        Week 11 React State homework: product list, add / remove, cart sidebar with a total computed from state, and
        quantity controls. Demo items only, nothing is sold.
      </p>
      <div className="shop-layout">
        <ProductList products={products} cart={cart} onAdd={addToCart} onRemove={removeFromCart} />
        <CartPanel
          products={products}
          cart={cart}
          onChangeQty={changeQty}
          onRemove={removeFromCart}
          onClear={() => setCart([])}
        />
      </div>
    </section>
  )
}
