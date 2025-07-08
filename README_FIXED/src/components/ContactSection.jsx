import { Box, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

function ContactSection() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{
        textAlign: 'center',
        py: 6,
        px: 2,
        backgroundColor: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(6px)',
        borderRadius: 3,
        mt: 6,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        sx={{
          background: 'linear-gradient(90deg, #7b1fa2, #1976d2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Let’s Connect 👋
      </Typography>

      <Typography variant="body1" color="#eeeeee" sx={{ mb: 3 }}>
        Reach out for opportunities, collaborations, or just say hi!
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center">
        <IconButton
          href="https://github.com/ismailcodes-dev"
          target="_blank"
          aria-label="GitHub"
          size="large"
          sx={{
            border: '2px solid #ffffff44',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#ffffff22',
            },
          }}
        >
          <GitHub fontSize="inherit" />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/mohamed-ismail-7b1108268/"
          target="_blank"
          aria-label="LinkedIn"
          size="large"
          sx={{
            border: '2px solid #ffffff44',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#ffffff22',
            },
          }}
        >
          <LinkedIn fontSize="inherit" />
        </IconButton>

        <IconButton
          href="mailto:ismailcs2003@gmail.com"
          aria-label="Email"
          size="large"
          sx={{
            border: '2px solid #ffffff44',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#ffffff22',
            },
          }}
        >
          <Email fontSize="inherit" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default ContactSection;
