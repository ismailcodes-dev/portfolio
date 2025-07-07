import { Box, Typography, Button, Avatar } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function Header() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{ textAlign: 'center', py: 6 }}
    >
      <Avatar
        alt="Mohammed Ismail"
        src="/profile.png" // <-- your uploaded file name
        sx={{
          width: 120,
          height: 120,
          mx: 'auto',
          mb: 2,
          boxShadow: 3,
        }}
      />

      <Typography variant="h2" fontWeight={800}>
        Mohammed Ismail K
      </Typography>

      <Typography variant="h5" sx={{ color: 'gray', mt: 2 }}>
        <TypeAnimation
          sequence={[
            'Full Stack Developer', 2000,
            'UI/UX Designer', 2000,
            'CS Graduate', 2000,
            'React Enthusiast', 2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 4, px: 4, py: 1.5, fontWeight: 600 }}
        onClick={() => window.open('/Mohammed_Ismail_Professional.pdf')}
      >
        Download Resume
      </Button>
    </Box>
  )
}

export default Header
