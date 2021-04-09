import React, { useState, useEffect } from 'react';
import prices from '../data/prices';

const Pricing = () => {
  const [price, setPrice] = useState(1);

  const [selectPrice, setSelectPrice] = useState({});

  useEffect(() => {
    const priceRecive = parseInt(price);

    const newPrice = prices.filter((priceData) => priceData.id === priceRecive);

    setSelectPrice(newPrice[0]);
  }, [price]);

  return (
    <>
      <div className="Pricing">
        <input
          type="range"
          className="Pricing__range"
          value={price}
          list="pricingmarks"
          min="1"
          max="5"
          step="1"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <datalist id="pricingmarks">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
        </datalist>

        <div className="Pricing__select-price">{selectPrice.perMouth}</div>
      </div>
    </>
  );
};

export default Pricing;
