import React from 'react'
import {AiFillDelete} from "react-icons/ai"

function Cart() {
  return (
    <div className='cart'>
        <main>
            <CartItem></CartItem>
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
const CartItem=({imgSrc, name, price, qty, decrement, increment, deleteHandler,id})=>(
    <div className="cartItem">
        <img src={imgSrc} alt="Item" />
        <article>
            <h2>{name}</h2>
            <p>${30000}</p>
        </article>
        <div>
            <button onClick={()=>decrement(id)}>--</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>++</button>
        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)}></AiFillDelete>
    </div>


)
export default Cart