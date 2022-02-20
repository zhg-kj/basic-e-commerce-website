import { useLocation } from "react-router-dom"
import { Button } from "@mui/material"
import { BiCartAlt } from "react-icons/bi"

const Product = ({ addItem }) => {
  const location = useLocation()
  const product = location.state.product

  const cartProduct = {id: product.id, name: product.name, price: product.price, primary_image: product.primary_image, amount: 1}

  return (
    <div className='product-wrapper'>
        <div className='product'>
          <div className='product-left'>
            <img 
              src={product.primary_image.url_standard} 
              alt={`Image of ${product.name}.`}
              style={{marginBottom: '1.5vh', maxWidth: '90vw', maxHeight: '60vh'}}
            />
            <Button variant='contained' onClick={() => addItem(cartProduct)} endIcon={<BiCartAlt />} size='large'>
              Add To Cart
            </Button>
          </div>
          <div className='product-details'>
            <h1>{product.name}</h1>
            <div dangerouslySetInnerHTML={{__html: product.description}} />
          </div>
        </div>
    </div>
  )
}

export default Product