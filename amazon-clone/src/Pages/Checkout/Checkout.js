import React from 'react';
import './Checkout.scss';
import Subtotal from '../../Components/Subtotal/Subtotal';
import CheckoutProduct from '../../Components/Checkout Product/CheckoutProduct';
import { useStateValue } from '../../StateProvider';
import cartEmpty from '../../Assets/Images/Cart_Empty.png';

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='checkout_warp'>
      <div className='checkout'>
        <div className='checkout__left'>
          <img
            className='checkout__ad'
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt='advertisement-banner'
          />

          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>Your Shopping Cart</h2>

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

        <div className='checkout__right'>
          <Subtotal />
        </div>
      </div>
      {!cart.length && (
        <div className='checkout__nobasket'>
          <img
            className='checkout__nobasketImage'
            src={cartEmpty}
            alt='Cart-Empty'
          />
          <h3>
            Please Add Some Products to <br />
            Make Me a Happy Basket !
          </h3>
        </div>
      )}
    </div>
  );
}

export default Checkout;