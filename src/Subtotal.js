import React from 'react'
import { useStateVal } from './StateProvider'
import { getMyBasketTotal } from './Reducer';
import "./subtotal.css"
import { Link } from 'react-router-dom';
function Subtotal() {
    const [{ Mybasket }] = useStateVal();
    var value = getMyBasketTotal(Mybasket);
    // console.log(value);
    return (
        <div className='subtotal'>
            <h4>Subtotal</h4>
            <p className='totalValue'>Total item is {Mybasket.length} and Amount is {value}</p>
            <Link to='/'>
                Return to Menu
            </Link>
        </div>

    )
}

export default Subtotal