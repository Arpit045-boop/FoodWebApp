import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';
import List from './menuList';
import Product from './Product';
import './product.css';
import { useStateVal } from './StateProvider';

function Menu() {
    const [{ Mybasket }] = useStateVal();
    return (
        <div className="Menu" >
            <div className='row'>
                <div className='col-lg-2'>
                    <Link to='/'>
                        <h6 className='menuLink'>Menu</h6>
                    </Link>
                </div>
                <div className='col-lg-6'>
                    <div className='row '>
                        {List?.map((item) =>
                        (
                            <div className='col-lg-4'>
                                <Product
                                    id={item.id}
                                    rating={item.rating}
                                    name={item.name}
                                    size={item.sizes}
                                    price={item.price}
                                    img={item.img}

                                />
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='checkout_menu'>
                        <button className='btn btn-success'><Link to="/checkout"><h5>Checkout</h5></Link></button>
                        <span className='size'>{Mybasket?.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu