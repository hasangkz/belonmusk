import React from 'react';

export const DisplayItem = ({ item, product }) => {
  return (
    <>
      <li id='list'>
        {product.title} x <span>{item.count}</span>
      </li>
    </>
  );
};
