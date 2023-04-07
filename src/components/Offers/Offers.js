import React, { useState } from 'react';
import calculatePrice from '../Calculator/Calculator';
import Calculator from '../Calculator/Calculator';

const Offers = ({price}) => {
    // const typeSelect = 1; // примерни стойности на типа и двигателя
    // const dvigatelSelect = 2000;
    price = calculatePrice(); 

    return (
      <section>
        <h4 className="of">ОФЕРТИ</h4>
  
        <div className="offers">
          <div className='allCars-info'>
            <h3>Компания: Бул инс</h3>
            <h3>Еднократна цена: 218.50лв.</h3>
          </div>
        </div>
      </section>
    );
  };
  
  export default Offers;