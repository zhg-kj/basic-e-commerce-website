import Item from "../components/Item"

const Cart = ({ cart, removeItem }) => {
  const total = cart.reduce((a, c) => a + c.quantity * c.price, 0);

  return (
    <div className='cart-wrapper'>
      <div className='cart'>
        <div className='cart-list'>
          {cart.map((item) => (
              <Item key={item.id} item={item} removeItem={removeItem} />
          ))}
        </div>
        {total !== 0 ? 
          <div className='total'>
            <h3>Total</h3>
            CAD${total}.00
          </div> : <h3>Add Items To Cart!</h3>}
      </div>
    </div>
  )
}

export default Cart