import { Grid } from '@mui/material'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={6}>
        <ProjectCard
          title="CareerArc – AI Career Platform"
          description="Built with React vite, Node.js, Express, MongoDB & integrated with Python ML to analyze resumes and recommend job roles."
          tags={['Node.js', 'Python ML','React.vite']}
          github="https://github.com/ismailcodes-dev/careerarc"
          bg="#e3f2fd"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <ProjectCard
          title="INR Harmonization – Dataset Tool"
          description="Python tool to process, clean, and standardize INR image datasets for AI training."
          tags={['Python', 'Image Processing']}
          github="https://github.com/ismailcodes-dev/inr-harmonization"
          bg="#e8f5e9"
        />
      </Grid>
    </Grid>
  )
}

export default ProjectsSection
