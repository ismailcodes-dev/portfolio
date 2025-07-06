// Premium React + Material UI Portfolio for Mohammed Ismail

import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar, Chip, Divider } from '@mui/material'
import { Download } from 'lucide-react'
import backgroundImg from './assets/bg-light.svg' // optional bg art
import './App.css'

function App() {
  const handleDownload = () => {
    window.open('/Mohammed_Ismail_Professional.pdf', '_blank')
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Avatar
            alt="Mohammed Ismail"
            src="/42d89681-61ee-40a3-9974-96a5f1d2ff16.png"
            sx={{ width: 120, height: 120, mx: 'auto', mb: 2, boxShadow: 3 }}
          />
          <Typography variant="h3" fontWeight={800} gutterBottom>
            Mohammed Ismail K
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            🚀 Full-stack Developer | Tech Enthusiast | CS Graduate
          </Typography>
          <Typography variant="body2" mt={1}>
            📍 Doha, Qatar | 📧 <a href="mailto:ismailcs2003@gmail.com">ismailcs2003@gmail.com</a>
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Download />}
            onClick={handleDownload}
            sx={{ mt: 3, borderRadius: 2, px: 4 }}
          >
            Download Resume
          </Button>
        </Box>

        <Divider sx={{ mb: 4 }}>Featured Projects</Divider>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%', boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  CareerArc
                </Typography>
                <Typography variant="body2">
                  AI-powered career guidance platform using Node.js, Express, MongoDB, and Python ML. Built REST APIs for student profiling & job-matching.
                </Typography>
                <Box mt={2}>
                  <Chip label="Node.js" /> <Chip label="MongoDB" /> <Chip label="Python ML" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%', boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  INR Harmonization
                </Typography>
                <Typography variant="body2">
                  Python-based tool for image dataset cleaning & automation. Built scalable backend for image editing integration & dataset transformation.
                </Typography>
                <Box mt={2}>
                  <Chip label="Python" /> <Chip label="Automation" /> <Chip label="Image Tools" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }}>Technical Skills</Divider>
        <Grid container spacing={2} justifyContent="center">
          {["JavaScript", "React", "Node.js", "Express", "MongoDB", "Python", "Git", "REST APIs", "Postman", "UI/UX", "Photoshop", "After Effects"].map(skill => (
            <Grid item key={skill}>
              <Chip label={skill} color="primary" variant="outlined" />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6 }}>Certifications</Divider>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography fontWeight={600}>Python Internship</Typography>
                <Typography variant="body2">RD Infro Technology – Sep 2024</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography fontWeight={600}>MongoDB Basics</Typography>
                <Typography variant="body2">Certified – Feb 2024</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }}>Contact</Divider>
        <Box textAlign="center">
          <Typography>Email: <a href="mailto:ismailcs2003@gmail.com">ismailcs2003@gmail.com</a></Typography>
          <Typography>GitHub: <a href="https://github.com/ismailcodes-dev" target="_blank">ismailcodes-dev</a></Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default App
