import React from 'react';
import './CheckoutProduct.scss';
import { useStateValue } from '../../StateProvider';
import Button from '@material-ui/core/Button';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // Remove the Item From the Cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        <Button onClick={removeFromCart} startIcon={<RemoveShoppingCartIcon />}>
          Remove from Cart
        </Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
