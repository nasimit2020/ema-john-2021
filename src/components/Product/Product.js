import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, price, seller, stock} = props.product;
    return (
        <div className="product-img-container">
            <div className="image-container">
                <img src={props.product.img} alt="" />
            </div>
            <div className="product-display">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <h3>${price}</h3>
                <p><small>Only <strong>{stock}</strong> left in stock-order now.</small></p>
                <button className="buyNowBtn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;