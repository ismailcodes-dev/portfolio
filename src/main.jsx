import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// Corrected the import path to the correct library name
import AnimatedCursor from 'react-animated-cursor';

// The accent color in RGB format for the cursor
const ACCENT_COLOR_RGB = '51, 255, 153';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color={ACCENT_COLOR_RGB}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.MuiButton-root', // Targets Material-UI buttons
        '.MuiChip-root',   // Targets Material-UI chips
      ]}
    />
    <App />
  </StrictMode>,
);