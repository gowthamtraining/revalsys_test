import React from 'react';
import { BadgeProps } from './type';
import { variantClasses } from './consts';



export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = ''
}) => {


  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
export default Badge;
