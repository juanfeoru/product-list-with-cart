const images = import.meta.glob('../assets/images/*.jpg', {
  eager: true,
  import: 'default',
});

export default function OrderItem({ item }) {
  const { name, price, quantity, image } = item;
  const subtotal = price * quantity;

  return (
    <li className='flex items-center gap-x-4 border-b border-rose-300/20 pb-4'>
      <img
        src={images[image.thumbnail]}
        alt={name}
        className='size-14 rounded-md object-cover shrink-0'
      />

      <div className='flex flex-col text-sm text-rose-900 min-w-0'>
        <h3 className='font-semibold truncate'>{name}</h3>

        <span className='text-red font-semibold'>
          {quantity}x
          <span className='text-rose-500 font-normal ml-2'>
            @ ${price.toFixed(2)}
          </span>
        </span>
      </div>

      <span className='ml-auto font-semibold text-rose-900 whitespace-nowrap'>
        ${subtotal.toFixed(2)}
      </span>
    </li>
  );
}
