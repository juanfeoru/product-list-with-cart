import removeIcon from '../assets/icons/icon-remove-item.svg';

export default function CartItem({ item, onRemoveItem }) {
  return (
    <li className='flex gap-x-4 items-center border-b border-rose-300/20 pb-4'>
      <div>
        <h3 className='font-semibold text-sm'>{item.name}</h3>

        <span className='font-semibold text-red text-sm'>
          {item.quantity}x
          <span className='text-rose-500 font-normal ml-4'>
            @ ${item.price.toFixed(2)}
          </span>
        </span>
        <span className='pl-4 font-semibold text-rose-500'>
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>

      <button
        aria-label={`Remove ${item.name} from cart`}
        onClick={() => onRemoveItem(item.name)}
        className='p-1 border border-rose-500 rounded-full cursor-pointer hover:border-rose-900 ml-auto'
      >
        <img src={removeIcon} alt='Remove item' className='' />
      </button>
    </li>
  );
}
