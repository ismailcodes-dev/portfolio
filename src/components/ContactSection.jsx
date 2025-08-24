import { Box, Typography } from '@mui/material';
import HoverListItem from './HoverListItem';

// --- IMPORTANT ---
// 1. Add your new social icon paths here
import githubPreview from '../assets/github.png';
import linkedinPreview from '../assets/linkedin.png';
import emailPreview from '../assets/Email.png';
// -----------------

const contactLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/ismailcodes-dev',
    imageSrc: githubPreview,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-ismail-7b1108268/',
    imageSrc: linkedinPreview,
  },
  {
    title: 'Email',
    href: 'mailto:ismailcs2003@gmail.com',
    imageSrc: emailPreview,
  },
];

function ContactSection() {
  return (
    <Box component="section" sx={{ width: '100%' }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: '#eeeeee',
          textAlign: 'center',
        }}
      >
        Let’s Connect 👋
      </Typography>

      <Box>
        {contactLinks.map((link, index) => (
          <HoverListItem
            key={index}
            title={link.title}
            imageSrc={link.imageSrc}
            href={link.href}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ContactSection;