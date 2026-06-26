export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'success' | 'info';
    className?: string;
}