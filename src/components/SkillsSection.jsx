import { Grid, Chip, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const skills = [
  'JavaScript', 'Python', 'React', 'Node.js', 'Express',
  'MongoDB', 'SQL', 'REST APIs', 'Postman', 'Git',
  'HTML5', 'CSS3', 'UI/UX Design', 'Photoshop', 'After Effects'
]

function SkillsSection() {
  return (
    <>
      <Typography variant="h5" fontWeight={700} gutterBottom textAlign="center">
        My Toolbox 🧰
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill}
              color="primary"
              variant="outlined"
              sx={{
                px: 2,
                py: 1,
                fontSize: '0.85rem',
                fontWeight: 500,
                borderRadius: 2
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default SkillsSection
