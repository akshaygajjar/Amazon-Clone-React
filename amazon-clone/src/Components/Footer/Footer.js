import React from 'react';
import './Footer.scss';

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='footer'>
      <a onClick={handleClick}>
        <div className='footer__Back-To-Top'>
          <h4>Back to top</h4>
        </div>
      </a>
      <div className='footer__container'>
        <div className='footer__box'>
          <img
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='am_logo'
          />
        </div>
        <div className='footer__box'>
          <div className='footer__info'>
            <h4>Get to know us</h4>
            <p>Career</p>
            <p>Get to know us</p>
            <p>Tour amazon fulfilment centre</p>
            <p>Amazon Prime</p>
            <p>Help</p>
          </div>
        </div>
        <div className='footer__box'>
          <div className='footer__info'>
            <h4>Make money with Amazon</h4>
            <p>Sell on Amazon Business</p>
            <p>Sell Services</p>
            <p>Associate Programme</p>
            <p>Amazon Pay</p>
            <p>Advertise your products</p>
          </div>
        </div>
        <div className='footer__box'>
          <div className='footer__info'>
            <h4>Amazon Payment Methods</h4>
            <p>Amazon Platinum Mastercard</p>
            <p>Amazon Money Store</p>
            <p>Gift Cards</p>
            <p>Currency Converter</p>
            <p>Shop with points</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
