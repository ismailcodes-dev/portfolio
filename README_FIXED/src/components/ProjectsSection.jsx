import { Grid, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      sx={{ py: 6, px: 2, textAlign: 'center' }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 4,
          color: '#1a237e',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
        }}
      >
        Featured Projects 🚀
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <ProjectCard
            title="CareerArc – AI Career Platform"
            description="Built with React vite, Node.js, Express, MongoDB & integrated with Python ML to analyze resumes and recommend job roles."
            tags={['Node.js', 'Python ML', 'React.vite']}
            github="https://github.com/ismailcodes-dev/careerarc"
            bg="#90caf9"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProjectCard
            title="INR Harmonization – Dataset Tool"
            description="Python tool to process, clean, and standardize INR image datasets for AI training."
            tags={['Python', 'Image Processing']}
            github="https://github.com/ismailcodes-dev/inr-harmonization"
            bg="#a5d6a7"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectsSection;
