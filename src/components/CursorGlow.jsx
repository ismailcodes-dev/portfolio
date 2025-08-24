import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

// This component creates a radial gradient that follows the mouse
const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Allows clicking through the overlay
        background: `radial-gradient(
          600px at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(51, 255, 153, 0.15),
          transparent 80%
        )`,
        zIndex: 9999, // Ensure it's on top of other content
      }}
    />
  );
};

export default CursorGlow;