import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialCardProps } from './type';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating = 5,
  quote,
  initials,
  name,
  role,
  avatarBg = 'bg-brand-primary'
}) => {
  return (
    <div className="bg-bg-card p-6 rounded-2xl border border-border-main shadow-sm flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex text-amber-400">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className={`w-4 h-4 ${idx < rating ? 'fill-current' : 'text-border-main'}`}
            />
          ))}
        </div>
        <p className="text-sm text-txt-muted italic leading-relaxed">
          "{quote}"
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3 border-t border-border-main pt-4">
        <div className={`w-10 h-10 ${avatarBg} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
          {initials}
        </div>
        <div>
          <h4 className="font-semibold text-sm text-txt-main">{name}</h4>
          <p className="text-xs text-txt-dim">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
