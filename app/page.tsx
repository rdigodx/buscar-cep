"use client";

import { Grid, Button } from "@mui/material";

import React from "react";
export default function Home() {
  const animais = [
    { nome: "cachorro", cor: "rgba(146, 214, 29, 1)" },
    { nome: "gato", cor: "rgba(29, 189, 229, 1)" },
    { nome: "papagaio", cor: "rgba(231, 44, 93, 1)" },
  ];

  const [contador, setContador] = React.useState(50);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <Grid container spacing={2} sx={{ margin: 2 }}>
      {animais.map((animal, index) => (
        <Grid
          size={{ xs: 6, md: 6 }}
          sx={{
            backgroundColor: animal.cor,
            border: 2,
            marginLeft: 3,
            padding: 2,
            borderRadius: 2,
          }}
        >
          {animal.nome} | numero: {contador}
        </Grid>
      ))}

      {/* Botão primário abaixo dos animais */}
      <Grid size={{ xs: 6 }} sx={{ textAlign: "center", marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          botao foi clicado {contador} vezes
        </Button>
      </Grid>
    </Grid>
  );
}
