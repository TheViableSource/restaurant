'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

// Fade in from bottom animation
export const FadeInUp = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
}: MotionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Fade in from left animation
export const FadeInLeft = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
}: MotionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Fade in from right animation
export const FadeInRight = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
}: MotionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale in animation
export const ScaleIn = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
}: MotionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger children container
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger item for use inside StaggerContainer
export const StaggerItem = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// Parallax scroll effect
export const ParallaxImage = ({
  children,
  className = '',
  offset = 50,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) => {
  return (
    <motion.div
      initial={{ y: -offset }}
      whileInView={{ y: offset }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 0 }}
      style={{ willChange: 'transform' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover scale effect
export const HoverScale = ({
  children,
  className = '',
  scale = 1.05,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Text reveal animation (word by word)
export const TextReveal = ({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const words = text.split(' ');

  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Fade wrapper (simple opacity)
export const Fade = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
}: MotionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
