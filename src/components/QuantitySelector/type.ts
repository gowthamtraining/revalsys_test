
export interface QuantitySelectorProps {
    quantity: number;
    max: number;
    min?: number;
    onChange: (value: number) => void;
    className?: string;
}