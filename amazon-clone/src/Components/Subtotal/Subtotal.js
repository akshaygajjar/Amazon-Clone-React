import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { getCartTotal } from '../../reducer';

function Subtotal() {
  const history = useHistory();
  const [{ cart, user }] = useStateValue();

  const checkoutPageHandler = () => {
    if (user) {
      if (cart.length <= 0) {
        alert('Please Add Something to Basket First !!!');
      } else {
        history.push('/payment');
      }
    } else {
      if (cart.length <= 0) {
        alert('Please Add Something to Basket First !!!');
      } else {
        alert('You Need to Login to Proceed Checkout !');
        history.push('/login', { from: 'checkoutPath' });
      }
    }
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={checkoutPageHandler}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
