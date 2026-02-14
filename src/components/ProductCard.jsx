import cartIcon from '../assets/icons/icon-add-to-cart.svg';
import plusIcon from '../assets/icons/icon-increment-quantity.svg';
import minusIcon from '../assets/icons/icon-decrement-quantity.svg';

const images = import.meta.glob('../assets/images/*.jpg', {
  eager: true,
  import: 'default',
});

export default function ProductCard({
  product,
  cartItem,
  onAddToCart,
  onUpdateQuantity,
}) {
  const { image, name, category, price } = product;

  return (
    <article className='relative'>
      <picture>
        <source srcSet={images[image.desktop]} media='(min-width: 1024px)' />
        <source srcSet={images[image.tablet]} media='(min-width: 768px)' />
        <img
          src={images[image.mobile]}
          className={`rounded-lg object-cover md:size-55 lg:size-65
    ${cartItem ? 'border-2 border-red' : ''}
  `}
          alt={name}
        />
      </picture>

      {!cartItem ? (
        <button
          onClick={() => onAddToCart(product)}
          className='absolute bottom-19 left-1/2 -translate-x-1/2 bg-white flex gap-x-2 px-4 py-2 rounded-full items-center border border-rose-400 font-semibold text-sm hover:text-red hover:border-red shadow-md cursor-pointer w-38 justify-center'
        >
          <img src={cartIcon} alt='' />
          Add to Cart
        </button>
      ) : (
        <div className='absolute bottom-19 left-1/2 -translate-x-1/2 bg-red text-white flex items-center gap-x-4 px-4 py-2 rounded-full shadow-md'>
          <button
            onClick={() => onUpdateQuantity(name, -1)}
            className='p-1 flex hover:scale-110 transition cursor-pointer'
          >
            <img src={minusIcon} alt='Decrease quantity' />
          </button>

          <span className='font-semibold'>{cartItem.quantity}</span>

          <button
            onClick={() => onUpdateQuantity(name, +1)}
            className='p-1 hover:scale-110 transition cursor-pointer'
          >
            <img src={plusIcon} alt='Increase quantity' />
          </button>
        </div>
      )}

      <div className='mt-8 text-sm'>
        <p className='text-rose-500'>{name}</p>
        <h3 className='font-semibold text-base'>{category}</h3>
        <span className='font-semibold text-red'>${price.toFixed(2)}</span>
      </div>
    </article>
  );
}
