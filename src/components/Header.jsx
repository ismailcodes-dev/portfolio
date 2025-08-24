import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import profileImage from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const ACCENT_COLOR = '#33ff99';

const Header = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        textAlign: "center",
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      <Avatar
        alt="Profile"
        src={profileImage}
        sx={{
          width: 120,
          height: 120,
          margin: "0 auto",
          border: `3px solid ${ACCENT_COLOR}`,
          boxShadow: `0 0 20px ${ACCENT_COLOR}33`,
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mt: 3,
          color: "#ffffff",
        }}
      >
        Mohammed Ismail K
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#eeeeee",
          mt: 1,
          fontWeight: 500,
        }}
      >
        <TypeAnimation
          sequence={[
            'Full Stack Developer', 2000,
            'UI/UX Designer', 2000,
            'React Enthusiast', 2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </Typography>

      {/* --- BUTTON CODE RESTORED BELOW --- */}
      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        href="/resume.pdf" // Tells the button which file to link to
        target="_blank"    // Opens the file in a new tab
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          backgroundColor: ACCENT_COLOR,
          fontWeight: 600,
          color: "#111111",
          borderRadius: "30px",
          boxShadow: `0 6px 16px ${ACCENT_COLOR}33`,
          "&:hover": {
            backgroundColor: "#ffffff",
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Header;