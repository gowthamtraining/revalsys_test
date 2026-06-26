export const BUTTON_CLASSES = {
  base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  variants: {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary-hover focus:ring-brand-primary shadow-sm hover:shadow-md active:scale-[0.98]',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary-hover focus:ring-brand-secondary shadow-sm active:scale-[0.98]',
    outline: 'border border-border-main text-txt-main bg-transparent hover:bg-bg-alt focus:ring-brand-primary active:scale-[0.98]',
    danger: 'bg-brand-danger text-white hover:bg-brand-danger-hover focus:ring-brand-danger shadow-sm active:scale-[0.98]',
    success: 'bg-brand-success text-white hover:bg-brand-success-hover focus:ring-brand-success shadow-sm active:scale-[0.98]'
  },
  sizes: {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
};
