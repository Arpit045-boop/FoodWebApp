import React from 'react'
import { useStateVal } from './StateProvider'
import "./checkout.css"
import Subtotal from './Subtotal';
import { Link } from 'react-router-dom';
function Checkout() {
  const [{ Mybasket }] = useStateVal();
  return (
    <div className='checkout'>
      {(Mybasket?.length === 0) ? (
        <div className="empty">
          <h2>
            Your food cart is empty
          </h2>
          <Link to='/'>
            Return to Menu
          </Link>
        </div>
      ) : (
        <div>
          <h3 style={{ margin: "20px 0 20px 40px" }}>My Orders</h3>
          {Mybasket?.map(item => (
            <div className='checkoutProduct'>
              <img src={item.image} />
              <div className='detailProd'>
                <h4>{item.name}</h4>
                <p>{item.size}gm</p>
              </div>
              <p style={{ fontWeight: "bold" }}>${item.price}</p>
            </div>
          ))}
        </div>
      )
      }

      {Mybasket?.length > 0 && (
        <Subtotal />
      )}

    </div>
  )
}
export default Checkout;