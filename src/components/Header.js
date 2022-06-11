import React from 'react';
import separate from '../separate';
export const Header = ({ money, aggregate }) => {
  return (
    <div className='headers'>
      {money - aggregate < 7 ? (
        <div className='header'>
          I don't know how you did it, but congratulations! You finished all the
          money.
        </div>
      ) : aggregate > 0 ? (
        <div>
          <div className='header'>
            You have{' '}
            <span style={{ 'text-decoration': 'underline' }}>
              ${separate(money - aggregate)}
            </span>{' '}
            more to spend.
          </div>
        </div>
      ) : (
        <div className='header'>
          There's a total of <span> ${separate(money)}</span> to spend!
        </div>
      )}
    </div>
  );
};
