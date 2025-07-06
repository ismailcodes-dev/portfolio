// Styled Developer Portfolio for Mohammed Ismail

import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material'
import { Download } from 'lucide-react'
import './App.css'

function App() {
  const handleDownload = () => {
    window.open('/Mohammed_Ismail_Professional.pdf', '_blank')
  }

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={5}>
          <Avatar
            alt="Mohammed Ismail"
            src="https://avatars.githubusercontent.com/u/12345678?v=4" // Replace later with your photo
            sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
          />
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Mohammed Ismail K
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Full-stack Developer | Tech Enthusiast | CS Graduate
          </Typography>
          <Typography variant="body1" mt={1}>
            📍 Doha, Qatar | 📧 <a href="mailto:ismailcs2003@gmail.com">ismailcs2003@gmail.com</a>
          </Typography>
          <Button
            variant="contained"
            startIcon={<Download />}
            onClick={handleDownload}
            sx={{ mt: 3 }}
          >
            Download Resume
          </Button>
        </Box>

        <Typography variant="h4" mb={2} fontWeight={600}>
          Featured Projects
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600}>CareerArc</Typography>
                <Typography variant="body2" mt={1}>
                  AI-powered career guidance platform with backend built using Node.js, Express, and MongoDB. Includes RESTful APIs and ML-based resume matching.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600}>INR Harmonization</Typography>
                <Typography variant="body2" mt={1}>
                  Python-based tool to clean and transform INR image datasets. Built for image processing, automation, and live capture integration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h4" mt={6} mb={2} fontWeight={600}>
          Technical Skills
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>JavaScript, Python, React</Grid>
          <Grid item xs={6}>Node, Express, MongoDB</Grid>
          <Grid item xs={6}>REST APIs, Git, Postman</Grid>
          <Grid item xs={6}>Photoshop, UI/UX, After Effects</Grid>
        </Grid>

        <Typography variant="h4" mt={6} mb={2} fontWeight={600}>
          Certifications
        </Typography>
        <ul>
          <li>Python Internship – RD Infro Technology (Sep 2024)</li>
          <li>Introduction to MongoDB (Feb 2024)</li>
        </ul>

        <Typography variant="h4" mt={6} mb={2} fontWeight={600}>
          Contact
        </Typography>
        <Typography>Email: <a href="mailto:ismailcs2003@gmail.com">ismailcs2003@gmail.com</a></Typography>
        <Typography>GitHub: <a href="https://github.com/ismailcodes-dev" target="_blank">ismailcodes-dev</a></Typography>
      </Container>
    </Box>
  )
}

export default App
