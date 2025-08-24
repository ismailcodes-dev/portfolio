import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// This component wraps its children and applies animations based on scroll position
const ScrollAnimated = ({ children }) => {
  const ref = useRef(null);
  
  // Track scroll progress relative to this component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Animate from when it enters to when it leaves the screen
  });

  // Map scroll progress to scale and opacity
  // It will scale from 80% -> 100% -> 80%
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  // It will fade in and then fade out
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimated;