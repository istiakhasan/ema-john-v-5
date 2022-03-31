import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product,handleAddToCart}) => {
    const {name,img,seller,price,ratings}=product;
    
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <p className='product-name'>{name}</p>
          <p>Price:{price}</p>
          <p><small>Seller:{seller}</small></p>
          <p><small>Ratings:{ratings} starts</small></p>
          </div>

          <div style={{marginTop:'auto'}}>
               
          <button onClick={()=>handleAddToCart(product)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
          </div>
          
            
        </div>
    );
};

export default Product;