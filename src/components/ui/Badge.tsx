import React from 'react';
import { cn } from '../../lib/utils';


interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f5f5f5] text-[#666666] border border-[#eeeeee]',
      className
    )}>
      {children}
    </span>
  );
}
