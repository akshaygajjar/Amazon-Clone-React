import React from 'react';
import Product from '../../Components/Product/Product';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup21-page/Eng-Mobile/1500x600_129_month._CB663607667_.jpg'
          alt='home-image'
        />

        <div className='home__row'>
          <Product
            id='6'
            title='Samsung 163 4K Ultra HD Smart (Black)'
            price={1880.7}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/81Qxjm42bOL._SX679_.jpg'
          />
          <Product
            id='5'
            title='Apple iPad Pro with Apple M1 chip'
            price={2671.93}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/815KnP2wjDS._SX679_.jpg'
          />
          <Product
            id='2'
            title='ASUS ROG Strix Scar 17, Intel Core i9, 10th Gen, Gaming Laptop'
            price={3627.06}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81ESehPEHLL._SX679_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='3'
            title='Apple Watch Series 6 with Deep Navy Sport Band'
            price={913.48}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71C9mkSFYVS._SX466_.jpg'
          />

          <Product
            id='4'
            title='boAt Stone Bluetooth Speaker'
            price={67.15}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/71DfzuViKGL._SY450_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='7'
            title='Fujifilm Instax Mini 9 Instant Camera (Flamingo Pink) Gift Box'
            price={67.04}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81ObHwtEHjL._SX522_.jpg'
          />
          <Product
            id='1'
            title='Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition, Kindle Edition
            by Martin Robert C.'
            price={5.71}
            rating={4}
            image='https://m.media-amazon.com/images/I/41SH-SvWPxL.jpghttps://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
          />
          <Product
            id='1'
            title='POWER TRONS Electric Bicycle with 7 Speed Gears and Detachable Battery (white, Blue)'
            price={537.26}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81-kJlBIu0S._SX679_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
