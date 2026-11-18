// Requirement 1 + 2: product list with Add / Remove buttons.
export default function ProductList({ products, cart, onAdd, onRemove }) {
  return (
    <ul className="shop-products">
      {products.map((product) => {
        const inCart = cart.some((item) => item.id === product.id)
        return (
          <li key={product.id} className="card shop-card">
            <img src={product.image} alt="" width="200" height="140" />
            <h3>{product.name}</h3>
            <p className="shop-price">${product.price.toFixed(2)}</p>
            <div className="shop-actions">
              <button type="button" className="button" onClick={() => onAdd(product.id)}>
                Add to cart<span className="sr-only">: {product.name}</span>
              </button>
              {inCart && (
                <button type="button" className="button ghost" onClick={() => onRemove(product.id)}>
                  Remove<span className="sr-only">: {product.name}</span>
                </button>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
