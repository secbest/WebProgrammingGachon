// Requirement 3 + 4: cart sidebar with quantity controls. The total is computed from state.
export default function CartPanel({ products, cart, onChangeQty, onRemove, onClear }) {
  const lines = cart.map((item) => ({ ...item, product: products.find((p) => p.id === item.id) }))
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)
  const totalPrice = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0)

  return (
    <aside className="shop-cart" aria-labelledby="cart-title">
      <h3 id="cart-title">Cart ({totalItems})</h3>
      {lines.length === 0 ? (
        <p className="muted">Your cart is empty.</p>
      ) : (
        <ul className="plain">
          {lines.map(({ id, qty, product }) => (
            <li key={id} className="shop-line">
              <span className="shop-line-name">{product.name}</span>
              <span className="shop-line-total">${(product.price * qty).toFixed(2)}</span>
              <span className="shop-qty">
                <button type="button" className="qty-btn" onClick={() => onChangeQty(id, -1)}>
                  <span aria-hidden="true">−</span>
                  <span className="sr-only">Decrease quantity of {product.name}</span>
                </button>
                <span aria-label={`Quantity ${qty}`}>{qty}</span>
                <button type="button" className="qty-btn" onClick={() => onChangeQty(id, 1)}>
                  <span aria-hidden="true">+</span>
                  <span className="sr-only">Increase quantity of {product.name}</span>
                </button>
              </span>
              <button type="button" className="link-btn" onClick={() => onRemove(id)}>
                Remove<span className="sr-only"> {product.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="shop-total" role="status">
        Total: <strong>${totalPrice.toFixed(2)}</strong>
      </p>
      {lines.length > 0 && (
        <button type="button" className="link-btn" onClick={onClear}>
          Clear cart
        </button>
      )}
    </aside>
  )
}
