import { Box } from '@mui/material';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import CursorGlow from './components/CursorGlow';
import ScrollAnimated from './components/ScrollAnimated';

function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#111111',
        fontFamily: "'Inter', sans-serif",
        py: { xs: 6, md: 10 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // This is the important change: It prevents any content from extending the page
        overflowX: 'hidden', 
      }}
    >
      <CursorGlow />

      <Box
        sx={{
          width: '100%',
          maxWidth: '1100px',
          px: { xs: 2, sm: 4, md: 6 },
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 8, md: 10 }
        }}
      >
        <Header />
        
        <ScrollAnimated>
          <AboutSection />
        </ScrollAnimated>
        
        <ScrollAnimated>
          <ProjectsSection />
        </ScrollAnimated>

        <ScrollAnimated>
          <SkillsSection />
        </ScrollAnimated>

        <ScrollAnimated>
          <CertificationsSection />
        </ScrollAnimated>

        <ScrollAnimated>
          <ContactSection />
        </ScrollAnimated>
        
      </Box>
    </Box>
  );
}

export default App;