import React from 'react'
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProducts from './CheckoutProducts';
import Subtotal from './Subtotal';
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            {basket?.length === 0 ? (
                <div>
                    <h1>Your Shopping Basket is Empty.</h1>
                    <p>You have no items in your basket , please got to the store and add some itms to go to checkout process.</p>
                </div>
            ): (
                <div>
                    <h2 className="checkout_title"> Your Shopping Basket</h2>
                    {/*list all the checkout products */}
                    {basket.map(item =>(
                       <CheckoutProducts
                         id = {item.id}
                         price={item.price}
                         title = {item.title}
                         rating = {item.rating}
                         image= {item.image}
                        /> 
                    ))}
                </div>
            )}

            </div>
            {basket.length >0 && (
              <div className="checkout__right">
              <Subtotal />
              </div> 
            )}
            
        </div>
    );
}

export default Checkout;
