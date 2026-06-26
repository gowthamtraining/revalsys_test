import React from 'react';
import { Button } from '../Button';
import { EmptyStateProps } from './EmptyStateType';


export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionText,
  onActionClick,
  icon: Icon
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-bg-card rounded-2xl border border-border-main shadow-sm max-w-lg mx-auto animate-fade-in">
      <div className="p-4 bg-bg-alt rounded-full text-brand-primary mb-5">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-semibold text-txt-main mb-2">{title}</h3>
      <p className="text-txt-muted text-sm max-w-sm mb-6 leading-relaxed">{description}</p>
      {actionText && onActionClick && (
        <Button variant="primary" size="md" onClick={onActionClick}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
export default EmptyState;
