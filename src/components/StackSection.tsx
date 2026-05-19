import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StackSectionProps {
  children: ReactNode;
  index: number;
  total: number;
  bgColor?: string;
}

const StackSection = ({ children, index, total, bgColor = 'bg-midnightViolet' }: StackSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const isLast = index === total - 1;

  return (
    <motion.section
      ref={ref}
      style={{
        scale: isLast ? 1 : scale,
        top: `${index * 20}px`, // staggers the sticky position
      }}
      className={`sticky w-full ${bgColor} ${index > 0 ? 'rounded-t-[40px]' : ''} shadow-2xl`}
    >
      {children}
    </motion.section>
  );
};

export default StackSection;