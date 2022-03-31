import React from 'react';

import './Cart.css'

const Cart = ({cart,children}) => {

    let total=0;
    let shipping=0;
    let quantity=0;
    for(let product of cart){
        total=total+product.price*product.quantity;
        shipping+=product.shipping;
        quantity+=product.quantity ;
    }


    const tax=parseFloat((total*0.1).toFixed(2));
    const grandTotal=total+shipping+tax
   


    return (
        <div className='cart'>
             <h4 style={{textAlign:"center"}}>Order Summary</h4>
            <p>Selected Items:{quantity}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <h5>Grand Total:${grandTotal.toFixed(2)}</h5>
            {children}
            
        </div>
    );
};

export default Cart;