"use client";

import { useState } from "react";
import { Box, Button, Grid, TextField, Typography, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Busca() {
  const [cep, setCep] = useState("");

  const handleSearch = () => {
    // Aqui você pode adicionar a lógica para buscar o CEP
    console.log("Buscando CEP:", cep);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 500,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <Grid container spacing={3} direction="column" alignItems="center">
          {/* Título */}
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              textAlign="center"
            >
              Busca de CEP
            </Typography>
          </Grid>

          {/* Subtítulo */}
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
            >
              Digite o CEP abaixo para buscar informações.
            </Typography>
          </Grid>

          {/* Campo de busca */}
          <Grid size={{ xs: 12 }} width="100%">
            <TextField
              fullWidth
              label="CEP"
              variant="outlined"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              inputProps={{ maxLength: 9 }}
            />
          </Grid>

          {/* Botão de busca */}
          <Grid size={{ xs: 12, sm: 4 }} width="100%">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SearchIcon />}
              onClick={handleSearch}
              sx={{
                py: 1.2,
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
