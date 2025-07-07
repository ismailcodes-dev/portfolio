import { Box, Typography, IconButton, Stack } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'
import { motion } from 'framer-motion'

function ContactSection() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{ textAlign: 'center', py: 4 }}
    >
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Let’s Connect 👋
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Reach out for opportunities, collaborations, or just say hi!
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center">
        <IconButton
          href="https://github.com/ismailcodes-dev"
          target="_blank"
          aria-label="GitHub"
          size="large"
        >
          <GitHub fontSize="inherit" />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/mohamed-ismail-7b1108268/" // <-- replace with yours
          target="_blank"
          aria-label="LinkedIn"
          size="large"
        >
          <LinkedIn fontSize="inherit" />
        </IconButton>
        <IconButton
          href="mailto:ismailcs2003@gmail.com"
          aria-label="Email"
          size="large"
        >
          <Email fontSize="inherit" />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default ContactSection
