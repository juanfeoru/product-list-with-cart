import confirmedIcon from '../assets/icon-order-confirmed.svg';
import OrderItem from './OrderItem';

export default function OrderConfirmation({ items, onNewOrder }) {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className='fixed inset-0 z-50 bg-black/40 flex items-end md:items-center justify-center'>
      <section
        className='w-full max-w-lg bg-white rounded-t-2xl md:rounded-2xl p-6
                          max-h-[90vh] flex flex-col'
      >
        <img src={confirmedIcon} alt='' width={48} height={48}/>

        <h2 className='text-4xl font-bold text-rose-900 mt-4'>
          Order Confirmed
        </h2>

        <p className='mt-2 text-rose-500 text-sm'>
          We hope you enjoy your food!
        </p>

        {/* 🔽 ZONA CON SCROLL */}
        <section
          className='mt-4 bg-rose-50 p-6 rounded-lg flex flex-col gap-y-4
                            overflow-y-auto flex-1'
        >
          {items.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}

          <div className='flex justify-between pt-4'>
            <span className='text-sm'>Order Total</span>
            <span className='font-bold text-2xl'>${total.toFixed(2)}</span>
          </div>
        </section>

        {/* 🔽 BOTÓN FIJO */}
        <button
          onClick={onNewOrder}
          className='mt-6 w-full bg-red text-white py-3 rounded-full font-semibold hover:bg-red-950 cursor-pointer'
        >
          Start New Order
        </button>
      </section>
    </div>
  );
}

