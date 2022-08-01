import React from 'react'
import { Typography, Rating } from '@mui/material'
import { useStateVal } from './StateProvider';
import './product.css';

function Product(props) {
    const [{ Mybasket }, dispatch] = useStateVal();
    function handleClick() {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                rating: props.rating,
                image: props.img,
                name: props.name,
                size: props.size,
                price: props.price
            }
        })
    }
    // console.log(Mybasket);
    return (
        <div className='product'>
            <div className='rating'>
                <Typography component="legend"></Typography>
                <Rating name="read-only" value={props.rating} readOnly />
            </div>

            <div className='foodImg'>
                <img src={props.img} alt="" />
            </div>
            <div className='foodDetail'>
                <p>{props.name}</p>
                <p style={{ backgroundColor: "white", marginLeft: "10px" }}> {props.size}gm</p>
            </div>
            <br />
            <span className='price'>${props.price}</span>
            <button onClick={handleClick} style={{ marginLeft: "15px", marginTop: "5px" }}>+</button>
        </div>
    )
}

export default Product