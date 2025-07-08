import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import TerminalTwoToneIcon from "@mui/icons-material/TerminalTwoTone";

const skills = [
  "JavaScript", "Python", "React", "Node.js", "Express", "MongoDB", "SQL",
  "REST APIs", "Postman", "Git", "HTML5", "CSS3", "UI/UX Design",
  "Photoshop", "After Effects"
];

const SkillsSection = () => {
  return (
    <Box sx={{ py: 6, px: 2, textAlign: "center" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 3,
          color: "#1a237e",
        }}
      >
        My Toolbox <TerminalTwoToneIcon fontSize="small" />
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        spacing={1}
      >
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            sx={{
              m: 0.5,
              backgroundColor: "#f3e5f5",
              color: "#4a148c",
              fontWeight: 500,
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SkillsSection;
