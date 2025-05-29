// src/Components/QuemSomos/QuemSomos.jsx
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

export default function QuemSomos() {
  return (
    <Box sx={{ backgroundColor: "#003366", py: 10 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Texto */}
        <Grid item xs={12} md={5}>
          <Box sx={{ px: 4 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
            >
              Quem <span style={{ position: "relative" }}>
                somos?
                <span style={{
                  position: "absolute",
                  width: "100%",
                  height: "10px",
                  backgroundColor: "#fcd34d", // cor amarela clara
                  bottom: 0,
                  left: 0,
                  zIndex: -1
                }} />
              </span>
            </Typography>
            <Typography variant="body1" sx={{ color: "#ccc", mb: 3 }}>
              Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#60a5fa", color: "#fff" }}>
              Let's Go →
            </Button>
          </Box>
        </Grid>

        {/* Imagem ou Caixa */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: "100%",
              height: 250,
              backgroundColor: "#bfdbfe", // azul claro
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
