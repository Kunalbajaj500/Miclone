import React from "react";
import '../styles/ProductReviewCart.css'





const ProductReviewCart = ({review,name,price, image,index}) => {
    return (
        <div className="ProductReviewCart">
            <img src={image} alt={index} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
} 
export default ProductReviewCart