import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  key?: React.Key;
}

export default function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : {}}
      className={cn(
        'bg-white rounded-3xl overflow-hidden border border-[#f0f0f0] transition-shadow shadow-sm hover:shadow-md',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
