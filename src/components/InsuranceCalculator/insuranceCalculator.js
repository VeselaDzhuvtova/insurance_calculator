const calculatePrice = (engineVolume, enginePower, installments) => {
    let price = 0;
    if (engineVolume <= 1400) {
      if (enginePower <= 74) {
        price = 150;
      } else if (enginePower > 74 && enginePower <= 110) {
        price = 200;
      } else if (enginePower > 110) {
        price = 250;
      }
    } else if (engineVolume > 1400 && engineVolume <= 2200) {
      if (enginePower <= 74) {
        price = 200;
      } else if (enginePower > 74 && enginePower <= 110) {
        price = 250;
      } else if (enginePower > 110) {
        price = 300;
      }
    } else if (engineVolume > 2200) {
      if (enginePower <= 74) {
        price = 250;
      } else if (enginePower > 74 && enginePower <= 110) {
        price = 300;
      } else if (enginePower > 110) {
        price = 350;
      }
    }
  
    if (installments === 2) {
      price *= 1.05;
    } else if (installments === 4) {
      price *= 1.1;
    }
  
    return price.toFixed(2);
  };
  
  export default calculatePrice;