import React from 'react';
import './Product.css';
import Button from '@material-ui/core/Button';

function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <strong>${price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt='' />

      <Button variant='contained' size='small'>
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
