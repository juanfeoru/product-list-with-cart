import products from '../data/data.json';
import ProductCard from './ProductCard';

export default function ProductList({
  productsInCart,
  onAddToCart,
  onUpdateQuantity,
}) {
  return (
    <section className='mt-6 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 md:justify-items-center'>
      {products.map((product) => {
        const cartItem = productsInCart.find(
          (item) => item.name === product.name,
        );

        return (
          <ProductCard
            key={product.name}
            product={product}
            cartItem={cartItem}
            onAddToCart={onAddToCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        );
      })}
    </section>
  );
}
