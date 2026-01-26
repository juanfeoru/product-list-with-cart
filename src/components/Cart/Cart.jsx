import YourCartEmpty from './YourCartEmpty';
import YourCartSelected from './YourCartSelected';

export default function Cart({ items, onUpdateQuantity, onRemoveItem, onConfirmOrder }) {
  if (items.length === 0) {
    return <YourCartEmpty count={0} />;
  }

  return (
    <YourCartSelected
      items={items}
      onUpdateQuantity={onUpdateQuantity}
      onRemoveItem={onRemoveItem}
      onConfirmOrder={onConfirmOrder}
    />
  );
}
