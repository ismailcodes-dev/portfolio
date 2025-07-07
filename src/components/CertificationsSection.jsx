import { Grid, Card, CardContent, Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'Python Internship',
    issuer: 'RD Infro Technology',
    date: 'Sep 2024',
    color: '#fffde7'
  },
  {
    title: 'MongoDB Basics',
    issuer: 'MongoDB University',
    date: 'Feb 2024',
    color: '#f3e5f5'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Aug 2023',
    color: '#e1f5fe'
  }
]

function CertificationsSection() {
  return (
    <Box component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Grid container spacing={4} justifyContent="center">
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 3,
                backgroundColor: cert.color,
                boxShadow: 3,
                height: '100%'
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={700}>
                  {cert.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {cert.issuer}
                </Typography>
                <Typography variant="caption" sx={{ color: 'gray' }}>
                  {cert.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CertificationsSection
