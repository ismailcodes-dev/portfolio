import { Box, Divider } from '@mui/material'
import Header from './components/Header'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #f5faff, #e8f0ff)',
        minHeight: '100vh',
        py: 8,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {/* Fully centered content container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 'lg',
          px: { xs: 12, sm: 6, md: 4 }
        }}
      >
        <Header />
        <Divider sx={{ mb: 4, fontWeight: 600 }}>Featured Projects</Divider>
        <ProjectsSection />
        <Divider sx={{ my: 6, fontWeight: 600 }}>Technical Skills</Divider>
        <SkillsSection />
        <Divider sx={{ my: 6, fontWeight: 600 }}>Certifications</Divider>
        <CertificationsSection />
        <Divider sx={{ my: 12, fontWeight: 600 }}>Contact</Divider>
        <ContactSection />
      </Box>
    </Box>
  )
}

export default App