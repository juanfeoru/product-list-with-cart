import emptyCart from '../../assets/icons/illustration-empty-cart.svg';

export default function YourCartEmpty({ count }) {
  return (
    <aside className='mt-6 bg-white rounded-lg p-6 lg:max-w-112.5 lg:rounded-xl'>
      <h2 className='font-bold text-red text-2xl'>
        Your cart <span>({count})</span>
      </h2>

      <img
        src={emptyCart}
        alt='Empty shopping cart illustration'
        className='my-6 mx-auto'
      />

      <p className='text-rose-500 font-semibold text-sm text-center'>
        Your added items will appear here
      </p>
    </aside>
  );
}
