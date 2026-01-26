import CartItem from '../CartItem';
import CartSummary from '../CartSummary';

export default function YourCartSelected({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onConfirmOrder,
}) {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <section className='mt-6 bg-white rounded-lg p-6 lg:max-w-112.5 lg:rounded-xl lg:mt-0 lg:sticky flex flex-col gap-y-4'>
      <h2 className='font-bold text-red text-xl'>
        Your cart <span>({items.length})</span>
      </h2>

      <ul className='flex flex-col gap-y-4'>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </ul>

      <CartSummary
        total={total}
        onConfirmOrder={onConfirmOrder}
        onClick={onConfirmOrder}
      />
    </section>
  );
}
