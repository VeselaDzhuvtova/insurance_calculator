import React from 'react';
import { useState } from 'react';

const Offers = () => {

    function MyCalculator() {
        const [engine, setEngine] = useState(0);
        const [power, setPower] = useState(0);
        const [price, setPrice] = useState(0);

        function calculatePrice() {
            let newPrice = 0;

            if (engine > 0 && power > 0) {
                if (engine <= 1200) {
                    if (power <= 66) {
                        newPrice = 100;
                    } else if (power <= 74) {
                        newPrice = 120;
                    } else if (power <= 75) {
                        newPrice = 130;
                    } else if (power <= 88) {
                        newPrice = 140;
                    } else if (power <= 110) {
                        newPrice = 150;
                    } else if (power <= 118) {
                        newPrice = 160;
                    } else if (power <= 125) {
                        newPrice = 170;
                    } else {
                        newPrice = 200;
                    }
                } else if (engine <= 1600) {
                    if (power <= 66) {
                        newPrice = 120;
                    } else if (power <= 74) {
                        newPrice = 130;
                    } else if (power <= 75) {
                        newPrice = 140;
                    } else if (power <= 88) {
                        newPrice = 150;
                    } else if (power <= 110) {
                        newPrice = 160;
                    } else if (power <= 118) {
                        newPrice = 170;
                    } else if (power <= 125) {
                        newPrice = 180;
                    } else {
                        newPrice = 210;
                    }
                } else if (engine <= 1800) {
                    if (power <= 66) {
                        newPrice = 120;
                    } else if (power <= 74) {
                        newPrice = 130;
                    } else if (power <= 75) {
                        newPrice = 140;
                    } else if (power <= 88) {
                        newPrice = 150;
                    } else if (power <= 110) {
                        newPrice = 160;
                    } else if (power <= 118) {
                        newPrice = 170;
                    } else if (power <= 125) {
                        newPrice = 180;
                    } else {
                        newPrice = 210;
                    }
                } else if (engine <= 2000)

                    setPrice(newPrice);
            }
        }
        return (
            <section>
                <h4 className="of">ОФЕРТИ</h4>

                <div className="offers">
                    <div className='allCars-info'>
                        <h3>Компания:</h3>
                        <h3>Еднократна цена: лв.</h3>
                    </div>
                </div>
            </section>
        );
    };
};


export default Offers;