import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleAddToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);

      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  function handleUpdateQuantity(name, delta) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function handleRemoveItem(name) {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  }

  function handleConfirmOrder() {
    setIsConfirmed(true);
  }

  return (
    <>
      <Header />

      <main className='max-w-7xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-x-8 lg:items-start'>
        <ProductList
          productsInCart={cartItems}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
        />

        <Cart
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onConfirmOrder={handleConfirmOrder}
        />
      </main>

      {isConfirmed && (
        <OrderConfirmation
          items={cartItems}
          onNewOrder={() => {
            setCartItems([]);
            setIsConfirmed(false);
          }}
        />
      )}
    </>
  );
}

export default App;
