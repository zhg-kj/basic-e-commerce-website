import { IconButton } from "@mui/material"
import { BiTrash } from "react-icons/bi"

const Item = ({ item, removeItem }) => {
  return (
    <div className='item'>
      <img 
        src={item.primary_image.url_standard} 
        alt={`Image of ${item.name}.`}
        style={{maxWidth: '150px', margin: '0 2.5vw 2.5vw 0'}}
      />
      <div className='item-details'>
        <h3>{item.name} x{item.quantity}</h3>
        <h5>Subtotal: CAD${item.subtotal}.00</h5>
        <div className='remove-wrapper'>
          <IconButton onClick={() => removeItem(item.id)}>
            <BiTrash />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Item