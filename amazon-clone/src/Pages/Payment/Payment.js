import React from 'react';
import './Payment.scss';
import CheckoutProduct from '../../Components/Checkout Product/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../reducer';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
        </h1>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>71, React Lane</p>
            <p>DAICT, Gandhinagar</p>
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment__items'>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <form>
              <CardElement />

              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button>
                  <span>Buy Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
