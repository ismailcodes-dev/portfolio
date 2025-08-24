import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AboutSection = () => {
  return (
    <Box component="section" sx={{ textAlign: 'center' }}>
      <Paper
        elevation={0}
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: { xs: 3, md: 4 },
          borderRadius: 4,
          maxWidth: '750px',
          margin: '0 auto',
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 2, color: '#eeeeee' }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#bbbbbb', textAlign: 'left', lineHeight: 1.7 }}
        >
          {/* IMPORTANT: Replace this text with your own personal summary! 
            This is your chance to tell your story.
          */}
          I am a passionate Full Stack Developer with a knack for creating elegant solutions in the least amount of time. I specialize in building dynamic and responsive web applications using modern technologies like React and Node.js. My goal is to leverage my skills to build intuitive, high-performance applications that solve real-world problems.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AboutSection;