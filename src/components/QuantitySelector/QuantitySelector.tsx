import React from 'react';
import { Minus, Plus } from 'lucide-react';

import { useQuantitySelector } from './useQuantitySelector';

export interface QuantitySelectorProps {
  quantity: number;
  max: number;
  min?: number;
  onChange: (value: number) => void;
  className?: string;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  max,
  min = 1,
  onChange,
  className = ''
}) => {
  const { handleDecrement, handleIncrement } = useQuantitySelector({
    quantity,
    max,
    min,
    onChange
  });

  return (
    <div className={`flex items-center border border-border-main rounded-lg overflow-hidden bg-bg-card h-10 ${className}`}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="px-3 h-full hover:bg-bg-alt text-txt-muted hover:text-txt-main transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-12 text-center text-sm font-semibold text-txt-main select-none">
        {quantity}
      </span>
      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="px-3 h-full hover:bg-bg-alt text-txt-muted hover:text-txt-main transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};
export default QuantitySelector;
