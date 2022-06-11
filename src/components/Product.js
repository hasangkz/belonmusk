import React from 'react';
import separate from '../separate';
export const Product = ({ product, basket, setBasket, money, aggregate }) => {
  const item = basket.find((item) => item.id === product.id);

  const decreaseBasket = () => {
    const isInBasket = basket.find((item) => item.id === product.id);
    isInBasket.count -= 1;
    if (isInBasket.count === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        isInBasket,
      ]);
    }
  };

  const increaseBasket = () => {
    //eklemeye caşılan ürün zaten daha önceden var mı yok mu kontrolü yapılır ve o ürün sepette varsa "isInBasket"e atılıyor.
    const isInBasket = basket.find((item) => item.id === product.id);
    //eğer ürün sepette daha önceden varsa: o ürünün count değerini 1 arttırız.
    //ve bu arttırma işlemi güncellensin diye o ürünü ilk başta sepetten çıkartırız.
    //daha sonra tekrardan sepete yollarız
    if (isInBasket) {
      isInBasket.count += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        isInBasket,
      ]);
    }
    //eklemeye çalışılan ürün ilk defa sepete ekleniyorsa, ona sepeete eklemeden önce count değerini 1 statik değerini veriyoruz
    else {
      setBasket([
        ...basket,
        {
          id: product.id,
          count: 1,
        },
      ]);
    }
  };
  return (
    <>
      <div className='products'>
        <div className='card'>
          <div className='product_image'>
            <img src={product.image} alt='product' className='product_image' />
          </div>
          <div className='product_context'>
            <h2 id='title'>{product.title}</h2>
            <span id='price'>${separate(product.price)}</span>
            <div className='buttons'>
              <button
                id='btn-sell'
                disabled={!item}
                onClick={decreaseBasket}
                className='buy'
              >
                Sell
              </button>
              <span id='count'>{item ? item.count : null}</span>
              <button
                id='btn-buy'
                disabled={money < aggregate + product.price}
                onClick={increaseBasket}
                className='buy'
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
