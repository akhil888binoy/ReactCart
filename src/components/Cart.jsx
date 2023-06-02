import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { useSelector } from 'react-redux';


function Cart() {
  const cartItems = useSelector(state => state.cart); // Assign the cartItems variable

  return (
    <div className='cart'>
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              key={i.id}
              id={i.id}
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
            ></CartItem>
          ))
        ) : (
          <h1>No items yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal:${2000}</h2>
        <h2>Shipping:${200}</h2>
        <h2>Tax:${20}</h2>
        <h2>Total:${122220}</h2>
      </aside>
    </div>
  )
}

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h2>{name}</h2>
      <p>${30000}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>--</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>++</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)}></AiFillDelete>
  </div>
)

export default Cart;
