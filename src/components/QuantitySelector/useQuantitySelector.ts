export interface UseQuantitySelectorProps {
  quantity: number;
  max: number;
  min: number;
  onChange: (value: number) => void;
}

export const useQuantitySelector = ({
  quantity,
  max,
  min,
  onChange
}: UseQuantitySelectorProps) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return {
    handleDecrement,
    handleIncrement
  };
};

export default useQuantitySelector;
