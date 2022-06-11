import React from 'react';
import { DisplayItem } from './DisplayItem';
import separate from '../separate';
export const DisplayBasket = ({ basket, products, aggregate, setBasket }) => {
  const resetBasket = () => {
    setBasket([]);
  };
  return (
    <div>
      {basket.length !== 0 ? (
        <div className='display'>
          <h2>Your Basket</h2>
          <ul>
            {basket.map((item) => (
              <DisplayItem
                key={item.id}
                item={item}
                product={products.find((data) => data.id === item.id)}
              />
            ))}
            <div className='total'>
              <div className='empty'>
                <i
                  onClick={resetBasket}
                  className='fa-solid fa-trash-can fa-2xl trash'
                ></i>
              </div>

              <div>Total: ${separate(aggregate)}</div>
            </div>
          </ul>
        </div>
      ) : (
        <div className='sec'>
          <h1>Your basket is empty.</h1>
        </div>
      )}
    </div>
  );
};
