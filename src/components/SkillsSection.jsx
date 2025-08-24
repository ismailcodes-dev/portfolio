import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import TerminalTwoToneIcon from "@mui/icons-material/TerminalTwoTone";
import { skills } from "../portfolioData";
import Marquee from "react-fast-marquee";

const ACCENT_COLOR = '#33ff99';

const SkillChip = ({ label }) => (
  <Chip
    label={label}
    sx={{
      mx: 1.5,
      fontWeight: 500,
      backgroundColor: 'rgba(51, 255, 153, 0.1)',
      color: ACCENT_COLOR,
      border: `1px solid ${ACCENT_COLOR}50`,
      padding: '16px 8px',
      fontSize: '1rem',
    }}
  />
);

const SkillsSection = () => {
  const firstRow = [...skills].slice(0, 8);
  const secondRow = [...skills].slice(8);

  return (
    <Box component="section" sx={{ py: 6 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 4,
          color: '#eeeeee',
          textAlign: "center"
        }}
      >
        My Toolbox <TerminalTwoToneIcon fontSize="small" />
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Marquee
          gradient={false}
          speed={30} // Changed from 50 to 30
          pauseOnHover={true}
        >
          {firstRow.map((skill) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          speed={30} // Changed from 50 to 30
          pauseOnHover={true}
          direction="right"
        >
          {secondRow.map((skill) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default SkillsSection;