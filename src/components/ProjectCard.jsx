import { Card, CardContent, Typography, Chip, Button, Box } from '@mui/material'
import { motion } from 'framer-motion'

function ProjectCard({ title, description, tags, github, bg }) {
  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      sx={{
        backgroundColor: bg,
        p: 1,
        borderRadius: 3,
        boxShadow: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={700}>{title}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>{description}</Typography>
        <Box mt={2}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
        <Button
          href={github}
          target="_blank"
          variant="outlined"
          sx={{ mt: 3 }}
        >
          View on GitHub
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
