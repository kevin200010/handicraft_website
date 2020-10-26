import React from 'react';
import { useStateValue } from './StateProvider';
import  CheckoutProduct from "./CheckoutProduct";
import  "./Checkout.css";



function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <p>this is inside checkout</p>
            <img className="checkout__ad" src="" alt="" />
            
            { basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>
                        you have no items in your basket. To buy  one or more item , click <b>"Add to Basket"</b> next to item.
                    </p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title  ">Your Shopping Basket</h2>
                    {/* now we are adding products from basket */}
                    {basket.map(item => {
                        console.log(item);
                        return(
                        <CheckoutProduct 
                            item={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                        )
                        
                    })}

                </div>
            )}
        </div>
    );
}



export default Checkout
