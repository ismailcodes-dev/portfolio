import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, tags, github, bg }) {
  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      sx={{
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(8px)',
        borderRadius: 3,
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        height: '100%',
        p: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderLeft: `8px solid ${bg || '#1976d2'}`,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            color: '#1a237e',
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: '#424242', mb: 2 }}
        >
          {description}
        </Typography>

        <Box mt={2}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                backgroundColor: bg || '#e3f2fd',
                color: '#0d47a1',
                fontWeight: 500,
              }}
            />
          ))}
        </Box>

        <Button
          href={github}
          target="_blank"
          variant="outlined"
          sx={{
            mt: 3,
            fontWeight: 600,
            color: '#1976d2',
            borderColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#e3f2fd',
              borderColor: '#1976d2',
            },
          }}
        >
          View on GitHub
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
