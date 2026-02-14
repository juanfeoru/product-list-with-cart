import carbonIcon from '../assets/icons/icon-carbon-neutral.svg';

export default function CartSummary({ total, onConfirmOrder }) {
  return (
    <>
      <div className='flex justify-between'>
        <span className='text-sm text-rose-900'>Order Total</span>
        <span className='font-bold text-2xl text-rose-900'>
          ${total.toFixed(2)}
        </span>
      </div>

      <div className='bg-rose-50 flex gap-x-2 items-center p-4 rounded-lg'>
        <img src={carbonIcon} alt='' />
        <span className='text-sm'>
          This is a <strong>carbon-neutral</strong> delivery
        </span>
      </div>

      <button
        onClick={onConfirmOrder}
        className='mt-6 w-full bg-red text-white py-3 rounded-full font-semibold hover:bg-red-950 cursor-pointer'
      >
        Confirm Order
      </button>
    </>
  );
}
