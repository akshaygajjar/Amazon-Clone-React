import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup21-page/Eng-Mobile/1500x600_129_month._CB663607667_.jpg'
          alt='home-image'
        />
      </div>
    </div>
  );
}

export default Home;
