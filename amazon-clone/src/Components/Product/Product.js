import React from 'react';
import './Product.scss';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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

      <Button onClick={addToCart} startIcon={<ShoppingCartIcon />} size='small'>
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
