// Requirement 1 + 2: product list with Add / Remove buttons.
export default function ProductList({ products, cart, onAdd, onRemove, onChangeQty }) {
  return (
    <ul className="shop-products">
      {products.map((product) => {
        const qty = cart.find((item) => item.id === product.id)?.qty ?? 0
        return (
          <li key={product.id} className="card shop-card">
            <img src={product.image} alt="" width="200" height="140" />
            <h3>{product.name}</h3>
            <p className="shop-price">
              ${product.price.toFixed(2)}
              {qty > 0 && <span className="shop-in-cart"> · {qty} in cart</span>}
            </p>
            <div className="shop-actions">
              {qty === 0 ? (
                <button type="button" className="button" onClick={() => onAdd(product.id)}>
                  Add to cart<span className="sr-only">: {product.name}</span>
                </button>
              ) : (
                <>
                  <span className="shop-qty">
                    <button type="button" className="qty-btn" onClick={() => onChangeQty(product.id, -1)}>
                      <span aria-hidden="true">−</span>
                      <span className="sr-only">Decrease quantity of {product.name}</span>
                    </button>
                    <span aria-label={`Quantity ${qty}`}>{qty}</span>
                    <button type="button" className="qty-btn" onClick={() => onChangeQty(product.id, 1)}>
                      <span aria-hidden="true">+</span>
                      <span className="sr-only">Increase quantity of {product.name}</span>
                    </button>
                  </span>
                  <button type="button" className="button ghost" onClick={() => onRemove(product.id)}>
                    Remove<span className="sr-only">: {product.name}</span>
                  </button>
                </>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
