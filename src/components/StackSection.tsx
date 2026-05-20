// src/components/StackSection.tsx
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StackSectionProps {
  children: ReactNode;
  index: number;
  total: number;
  bgColor?: string;
  isHorizontal?: boolean; // NEW PROP
  totalScrollWidth?: number; // NEW PROP: Width to translate (for horizontal mode)
}

const StackSection = ({ 
  children, 
  index, 
  total, 
  bgColor = 'bg-midnightViolet',
  isHorizontal = false,
  totalScrollWidth = 0 
}: StackSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  // 🎬 HORIZONTAL SCROLL LOGIC
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, -totalScrollWidth || 0] // Move X based on scroll progress
  );

  const isLast = index === total - 1;

  return (
    <motion.section
      ref={ref}
      style={{
        scale: isLast ? 1 : scale,
        top: `${index * 20}px`,
      }}
      className={`sticky w-full ${bgColor} ${index > 0 ? 'rounded-t-[40px]' : ''} shadow-2xl`}
    >
      {/* Wrapper handles the transformation */}
      <motion.div 
        style={{ x }}
        className={`${isHorizontal ? 'cursor-grab active:cursor-grabbing' : ''}`}
      >
        {/* Content is wrapped inside to respect the horizontal transform */}
        <div className={isHorizontal ? 'h-full' : ''}>
          {children}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default StackSection;