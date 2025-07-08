import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import profileImage from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      sx={{
        textAlign: "center",
        py: 10,
        px: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(6px)",
        borderRadius: 4,
        mx: 2,
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      }}
    >
      <Avatar
        alt="Profile"
        src={profileImage}
        sx={{
          width: 120,
          height: 120,
          margin: "0 auto",
          border: "4px solid #ffffff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
        }}
      />

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mt: 3,
          color: "#ffffff",
          textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
        }}
      >
        Mohammed Ismail K
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#eeeeee",
          mt: 2,
          fontWeight: 500,
          textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
        }}
      >
        <TypeAnimation
          sequence={[
            'Full Stack Developer', 2000,
            'UI/UX Designer', 2000,
            'CS Graduate', 2000,
            'React Enthusiast', 2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </Typography>

      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        href="/resume.pdf"
        target="_blank"
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          backgroundColor: "#1976d2",
          fontWeight: 600,
          color: "#fff",
          borderRadius: "30px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Header;
