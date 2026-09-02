import React from 'react';
import { motion } from 'motion/react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  direction = 'up',
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 50, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -60, scale: 0.98 },
          visible: { opacity: 1, x: 0, scale: 1 },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 60, scale: 0.98 },
          visible: { opacity: 1, x: 0, scale: 1 },
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 50, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for high-end snappy motion
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
