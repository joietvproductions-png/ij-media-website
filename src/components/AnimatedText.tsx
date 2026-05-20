import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
  delay?: number;
}

const AnimatedText = ({ 
  text, 
  className = '', 
  highlightWords = [],
  highlightClass = 'text-hotRose italic',
  delay = 0
}: AnimatedTextProps) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, i) => {
        const isHighlighted = highlightWords.includes(word.replace(/[.,!?]/g, ''));
        return (
          <motion.span
            key={i}
            variants={child}
            className={`inline-block ${isHighlighted ? highlightClass : ''}`}
            style={{ marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};

export default AnimatedText;