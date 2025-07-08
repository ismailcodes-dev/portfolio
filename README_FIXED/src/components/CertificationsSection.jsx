import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const certifications = [
  {
    title: "Python Internship",
    org: "RD Info Technology",
    date: "Sep 2024",
    color: "#FFF9C4", // light yellow
  },
  {
    title: "MongoDB Basics",
    org: "MongoDB University",
    date: "Feb 2024",
    color: "#F3E5F5", // light purple
  },
  {
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    date: "Aug 2023",
    color: "#E1F5FE", // light blue
  },
];

const CertificationsSection = () => {
  return (
    <Box sx={{ py: 6, px: 2, textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: "#1a237e" }}>
        Certifications
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        {certifications.map((cert, index) => (
          <Grid item key={index}>
            <Paper
              elevation={6}
              sx={{
                backgroundColor: cert.color,
                padding: 3,
                borderRadius: 3,
                minWidth: 240,
                textAlign: "center",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#2e2e2e" }}>
                {cert.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cert.org}
              </Typography>
              <Typography variant="caption" color="text.secondary">
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
