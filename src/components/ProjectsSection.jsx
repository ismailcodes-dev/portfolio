import { Box, Typography } from '@mui/material';
import HoverListItem from './HoverListItem';
import { projects } from '../portfolioData';

// --- IMPORTANT ---
// 1. Add your new preview image paths here
import careerArcPreview from '../assets/CareerArc.png';
import inrPreview from '../assets/INR.png';

const projectImages = {
  "CareerArc – AI Career Platform": careerArcPreview,
  "INR Harmonization – Dataset Tool": inrPreview,
};
// -----------------

function ProjectsSection() {
  return (
    <Box component="section" sx={{ width: '100%' }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: '#eeeeee',
          textAlign: 'center'
        }}
      >
        Featured Projects 🚀
      </Typography>

      <Box>
        {projects.map((project, index) => (
          <HoverListItem
            key={index}
            title={project.title}
            imageSrc={projectImages[project.title]} // Matches title to image
            href={project.github}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProjectsSection;