import React, { useState } from 'react';
import calculatePrice from '../Calculator/Calculator';

export const Offers = ({price}) => {
    // const typeSelect = 1; // примерни стойности на типа и двигателя
    // const dvigatelSelect = 2000;
    price = calculatePrice(); 

    return (
      <section className='of'>
        <h4 id="of-h4">ОФЕРТИ</h4>
  
        <div className="offers">
          <div className='allCars-info'>
            <h3>Компания: Бул инс</h3>
            <h3>Еднократна цена: 218.50лв.</h3>
          </div>
          </div>
          <div className="offers">
          <div className='allCars-info'>
            <h3>Компания: Булстрад</h3>
            <h3>Еднократна цена: 223.40лв.</h3>
          </div>
        </div>
      </section>
    );
  };
  
  // export default Offers;