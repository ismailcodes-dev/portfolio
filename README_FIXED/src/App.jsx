import { Box, Divider } from '@mui/material';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Box
      sx={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, rgb(218, 82, 28), rgb(112, 205, 255))',
      py: { xs: 6, md: 10 },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      overflowX: 'hidden', // important
        }}
    >

      <Box
        sx={{
          width: '100%',
          maxWidth: '1100px', // better max width
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Header />

        <Divider
          sx={{
            my: 6,
            fontWeight: 600,
            color: '#ffffffcc',
            '&::before, &::after': {
              borderColor: '#ffffff55',
            },
          }}
        >
          Featured Projects
        </Divider>
        <ProjectsSection />

        <Divider
          sx={{
            my: 6,
            fontWeight: 600,
            color: '#ffffffcc',
            '&::before, &::after': {
              borderColor: '#ffffff55',
            },
          }}
        >
          Technical Skills
        </Divider>
        <SkillsSection />

        <Divider
          sx={{
            my: 6,
            fontWeight: 600,
            color: '#ffffffcc',
            '&::before, &::after': {
              borderColor: '#ffffff55',
            },
          }}
        >
          Certifications
        </Divider>
        <CertificationsSection />

        <Divider
          sx={{
            my: 10,
            fontWeight: 600,
            color: '#ffffffcc',
            '&::before, &::after': {
              borderColor: '#ffffff55',
            },
          }}
        >
          Contact
        </Divider>
        <ContactSection />
      </Box>
    </Box>
  );
}

export default App;
