import React, { useState, useEffect } from 'react'; // 1. useEffect is needed now
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HoverListItem = ({ title, imageSrc, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // 2. We now track the mouse position on the entire window
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // 3. We no longer need onMouseMove here
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 4,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative', // This is still needed for the underline effect
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover h4': {
          color: '#33ff99',
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#ffffff',
          fontWeight: 600,
          transition: 'color 0.3s ease',
        }}
      >
        {title}
      </Typography>

      <ArrowForwardIcon sx={{ color: '#ffffff55', fontSize: '2rem' }} />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              // 4. Critical Change: Position is now 'fixed' to the viewport
              position: 'fixed',
              top: cursorPosition.y - 100,
              left: cursorPosition.x - 150,
              width: '300px',
              height: '200px',
              borderRadius: '12px',
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              pointerEvents: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              // Add zIndex to ensure it's on top of everything
              zIndex: 9999,
            }}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default HoverListItem;