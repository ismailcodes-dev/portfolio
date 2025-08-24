import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { certifications } from "../portfolioData";

const ACCENT_COLOR = '#33ff99'; // Your portfolio's accent color

const CertificationsSection = () => {
  return (
    <Box component="section" sx={{ py: 6, px: 2, textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: "#eeeeee" }}>
        Certifications
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                // Base styling for the card
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: 3,
                borderRadius: 4,
                textAlign: "center",
                height: '100%',
                // Add a smooth transition for all properties
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
                
                // --- This is the new hover effect ---
                '&:hover': {
                  backgroundColor: ACCENT_COLOR, // Change background to accent color
                  borderColor: ACCENT_COLOR, // Change border to accent color
                  // Target the text elements inside the card on hover
                  '& .MuiTypography-root': {
                    color: '#111111', // Change all text to dark for readability
                  },
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#ffffff", // Default text color
                  transition: 'color 0.3s ease', // Smooth color transition for text
                }}
              >
                {cert.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#bbbbbb', // Default text color
                  mt: 0.5,
                  transition: 'color 0.3s ease', // Smooth color transition for text
                }}
              >
                {cert.org}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#888888', // Default text color
                  mt: 1,
                  display: 'block',
                  transition: 'color 0.3s ease', // Smooth color transition for text
                }}
              >
                {cert.date}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CertificationsSection;