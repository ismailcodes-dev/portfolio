import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
} from '@mui/material';

const ACCENT_COLOR = '#33ff99';

function ProjectCard({ title, description, tags, github }) {
  return (
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: 4,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
        height: '100%',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color 0.3s ease',
        '&:hover': {
          borderColor: `${ACCENT_COLOR}80`,
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={600} sx={{ color: '#ffffff', mb: 1 }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: '#aaaaaa', mb: 2 }}>
          {description}
        </Typography>

        <Box mt={2}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                mr: 1, mb: 1,
                backgroundColor: 'rgba(51, 255, 153, 0.1)',
                color: ACCENT_COLOR,
                fontWeight: 500,
                border: `1px solid ${ACCENT_COLOR}50`
              }}
            />
          ))}
        </Box>

        <Button
          href={github}
          target="_blank"
          variant="outlined"
          sx={{
            mt: 3, fontWeight: 600,
            color: '#ffffff',
            borderColor: '#ffffff55',
            '&:hover': {
              backgroundColor: ACCENT_COLOR,
              borderColor: ACCENT_COLOR,
              color: '#111111'
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