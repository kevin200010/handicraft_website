import React from 'react';

import {useStateValue} from "./StateProvider";
import "./Product.css";
import Type_Product from "./Type_Product";


function Product( {id ,title , image , price , rating}) {
    const [{basket} , dispatch] = useStateValue();

    const addToBasket = () => {
        //add item to basket..
        // <Type_Product />
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title: title,
                image:image,
                price:price,
                rating:rating

            }
        })

    };

    return (
        <div className="product">
            <p className="product__name">{title}</p>
            <p className="product__price">
                <small>start from </small>
                <br></br>
        	    <strong>{price}</strong>
                <small>Rs.</small>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_) =>( 
                    <p>⭐</p>))}
            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Purchase</button>
        </div>
    )
}

export default Product
