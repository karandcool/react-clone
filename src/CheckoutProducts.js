import React from 'react';
import './CheckoutProducts.css';
import { useStateValue } from './StateProvider';

function CheckoutProducts({id,title,rating,image,price}) {
    
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //removing item from basket...
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id:id,

        });
    }
    
    return (
        <div className="checkoutproducts">
            <img src={image} alt=""/>
            
            <div className="checkoutproducts__info">
                <p className="checkoutproducts__title">{title}</p>
                <p className="checkoutproducts__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) =>(
                            <p>*</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>


            </div>
            
        </div>
    )
}

export default CheckoutProducts
