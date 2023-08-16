import { Button } from '~ui';
import { useCart } from '~store';

interface ToggleCartButtonProps {
  asteroid: Asteroid
}

export function ToggleCartButton({ asteroid }: ToggleCartButtonProps) {
  const { items, addItemInCart, removeItemFromCart } = useCart();
  const isOnCart = !!items.find((item) => item.id === asteroid.id);

  const handleClick = () => {
    if (isOnCart) return removeItemFromCart(asteroid);
    return addItemInCart(asteroid);
  };

  return (
    <Button
      size="small"
      variant="filledTonal"
      onClick={handleClick}
      active={isOnCart}
    >
      {isOnCart ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}
    </Button>
  );
}
