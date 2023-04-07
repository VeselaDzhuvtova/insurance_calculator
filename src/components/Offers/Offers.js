import React, { useState } from 'react';
import Calculator from '../Calculator/Calculator';

const Offers = ({price}) => {

    return (
        <section>
            <h4 className="of">ОФЕРТИ</h4>

            <div className="offers">
                <div className='allCars-info'>
                    <h3>Компания: Бул инс</h3>
                    <h3>{`Еднократна цена:${price} лв.`}</h3>
                </div>
            </div>
        </section>
    );
};

export default Offers;