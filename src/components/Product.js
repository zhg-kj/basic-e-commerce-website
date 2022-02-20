import { Link } from "react-router-dom"

const Product = ({ product }) => {
  return (
    <div className='product-card'>
      <Link key={product.id} to={`/product/${product.id}`} state={{product: product}}>
        <div className='image-wrapper'>
          <img 
            src={product.primary_image.url_standard} 
            alt={`Image of ${product.name}.`}
            className='product-image'
          />
        </div>
      </Link>
      <div style={{padding: '5px 0 5px 0'}}>
        <Link key={product.id} to={`/product/${product.id}`} state={{product: product}}>
          <h3>{product.name}</h3>
        </Link>
        <h4>{`CAD$${product.price}.00`}</h4>
      </div>
    </div>
  )
}

export default Product