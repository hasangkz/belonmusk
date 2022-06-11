import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { DisplayBasket } from './components/DisplayBasket';
import products from './products.json';
function App() {
  const [initialMoney] = useState(220000000000);
  const [basket, setBasket] = useState([]);
  const [aggregate, setAggregate] = useState(0);

  useEffect(() => {
    console.log(basket);
    setAggregate(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.count * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header money={initialMoney} aggregate={aggregate} />

      <div className='App'>
        {products.map((item) => (
          <Product
            money={initialMoney}
            aggregate={aggregate}
            product={item}
            key={item.id}
            basket={basket}
            setBasket={setBasket}
          />
        ))}

        <DisplayBasket
          setBasket={setBasket}
          products={products}
          aggregate={aggregate}
          basket={basket}
        />
      </div>
    </>
  );
}

export default App;
