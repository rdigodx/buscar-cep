"use client";

import { Grid, Typography, Button, Paper, Box } from "@mui/material";
import React from "react";

export default function ExemploUseEffect() {
  // ========================================
  // EXEMPLO 1: useEffect SEM dependências
  // ========================================
  const [vezesCarregou, setVezesCarregou] = React.useState(0);

  React.useEffect(() => {
    console.log("1️⃣ Executou APENAS uma vez ao carregar a página");
    setVezesCarregou(1);
  }, []); // ← Array VAZIO = executa só UMA vez

  // ========================================
  // EXEMPLO 2: useEffect COM dependências
  // ========================================
  const [nome, setNome] = React.useState("");
  const [saudacao, setSaudacao] = React.useState("");

  React.useEffect(() => {
    console.log("2️⃣ Nome mudou para:", nome);
    
    if (nome === "") {
      setSaudacao("Digite seu nome acima 👆");
    } else if (nome.length < 3) {
      setSaudacao(`Olá, ${nome}! Continue digitando...`);
    } else {
      setSaudacao(`Bem-vindo(a), ${nome}! 🎉`);
    }
  }, [nome]); // ← Executa TODA VEZ que 'nome' mudar

  // ========================================
  // EXEMPLO 3: useEffect com CLEANUP
  // ========================================
  const [cronometro, setCronometro] = React.useState(0);
  const [rodando, setRodando] = React.useState(false);

  React.useEffect(() => {
    let intervalo: NodeJS.Timeout | undefined;

    if (rodando) {
      console.log("3️⃣ Timer INICIADO");
      intervalo = setInterval(() => {
        setCronometro((prev) => prev + 1);
      }, 1000);
    }

    // CLEANUP: limpa o timer quando parar ou desmontar
    return () => {
      if (intervalo) {
        console.log("3️⃣ Timer LIMPO (cleanup executado)");
        clearInterval(intervalo);
      }
    };
  }, [rodando]); // ← Executa quando 'rodando' mudar

  return (
    <Grid container spacing={4} sx={{ padding: 4, maxWidth: 1400, margin: "0 auto" }}>
      {/* Cabeçalho */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="h3" align="center" gutterBottom>
          📚 useEffect - 3 Conceitos Fundamentais
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 2 }}>
          Abra o Console (F12) para ver quando cada useEffect executa!
        </Typography>
      </Grid>

      {/* ============================================ */}
      {/* EXEMPLO 1: SEM DEPENDÊNCIAS */}
      {/* ============================================ */}
      <Grid size={{ xs: 12 }}>
        <Paper elevation={4} sx={{ padding: 4, backgroundColor: "#e3f2fd", borderLeft: "8px solid #2196f3" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
            1️⃣ useEffect SEM Dependências
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              📌 Conceito:
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Executa <strong>APENAS UMA VEZ</strong> quando o componente é montado (página carrega).
            </Typography>
            
            <Paper sx={{ p: 2, backgroundColor: "#fff", fontFamily: "monospace", fontSize: "0.9rem" }}>
              <pre style={{ margin: 0 }}>{`React.useEffect(() => {
  // Este código executa SÓ uma vez
  console.log("Página carregou!");
}, []); // ← Array vazio é a chave!`}</pre>
            </Paper>
          </Box>

          <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2, textAlign: "center" }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Esta página foi carregada:
            </Typography>
            <Typography variant="h2" sx={{ color: "#1976d2", fontWeight: "bold" }}>
              {vezesCarregou} vez
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              💡 Recarregue a página (F5) e veja que o valor volta para 1
            </Typography>
          </Box>

          <Box sx={{ mt: 3, p: 2, backgroundColor: "#bbdefb", borderRadius: 1 }}>
            <Typography variant="subtitle2" fontWeight="bold">✅ Quando usar?</Typography>
            <Typography variant="body2">
              • Buscar dados de uma API ao carregar<br />
              • Configurar recursos iniciais<br />
              • Mostrar mensagens de boas-vindas
            </Typography>
          </Box>
        </Paper>
      </Grid>

      {/* ============================================ */}
      {/* EXEMPLO 2: COM DEPENDÊNCIAS */}
      {/* ============================================ */}
      <Grid size={{ xs: 12 }}>
        <Paper elevation={4} sx={{ padding: 4, backgroundColor: "#f3e5f5", borderLeft: "8px solid #9c27b0" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#7b1fa2" }}>
            2️⃣ useEffect COM Dependências
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              📌 Conceito:
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Executa <strong>TODA VEZ</strong> que a variável na lista de dependências mudar.
            </Typography>
            
            <Paper sx={{ p: 2, backgroundColor: "#fff", fontFamily: "monospace", fontSize: "0.9rem" }}>
              <pre style={{ margin: 0 }}>{`React.useEffect(() => {
  // Executa quando 'nome' mudar
  console.log("Nome mudou:", nome);
}, [nome]); // ← Observa a variável 'nome'`}</pre>
            </Paper>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
              Digite seu nome e veja o useEffect reagir:
            </Typography>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite aqui..."
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "18px",
                borderRadius: "8px",
                border: "2px solid #9c27b0",
                outline: "none",
              }}
            />
          </Box>

          <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2, textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#7b1fa2", fontWeight: "bold" }}>
              {saudacao}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              💡 A saudação muda automaticamente porque o useEffect está "observando" a variável 'nome'
            </Typography>
          </Box>

          <Box sx={{ mt: 3, p: 2, backgroundColor: "#e1bee7", borderRadius: 1 }}>
            <Typography variant="subtitle2" fontWeight="bold">✅ Quando usar?</Typography>
            <Typography variant="body2">
              • Reagir a mudanças de estado<br />
              • Validar dados de formulário<br />
              • Filtrar ou buscar dados baseado em input do usuário
            </Typography>
          </Box>
        </Paper>
      </Grid>

      {/* ============================================ */}
      {/* EXEMPLO 3: COM CLEANUP */}
      {/* ============================================ */}
      <Grid size={{ xs: 12 }}>
        <Paper elevation={4} sx={{ padding: 4, backgroundColor: "#fff3e0", borderLeft: "8px solid #ff9800" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#f57c00" }}>
            3️⃣ useEffect com CLEANUP (Limpeza)
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              📌 Conceito:
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Além de executar código, pode <strong>LIMPAR RECURSOS</strong> quando necessário (parar timers, remover listeners, etc).
            </Typography>
            
            <Paper sx={{ p: 2, backgroundColor: "#fff", fontFamily: "monospace", fontSize: "0.9rem" }}>
              <pre style={{ margin: 0 }}>{`React.useEffect(() => {
  const timer = setInterval(() => {...}, 1000);
  
  // Função CLEANUP (limpeza)
  return () => {
    clearInterval(timer); // ← Limpa o timer
  };
}, [rodando]);`}</pre>
            </Paper>
          </Box>

          <Box sx={{ p: 4, backgroundColor: "#fff", borderRadius: 2, textAlign: "center", mb: 3 }}>
            <Typography variant="h1" sx={{ fontSize: "5rem", color: "#f57c00", fontWeight: "bold" }}>
              {cronometro}s
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {rodando ? "⏱️ Cronômetro Rodando" : "⏸️ Cronômetro Pausado"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              sx={{ 
                backgroundColor: rodando ? "#f57c00" : "#4caf50",
                minWidth: 180,
                "&:hover": { backgroundColor: rodando ? "#e65100" : "#388e3c" }
              }}
              onClick={() => setRodando(!rodando)}
            >
              {rodando ? "⏸️ PAUSAR" : "▶️ INICIAR"}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ minWidth: 180, borderColor: "#ff9800", color: "#f57c00" }}
              onClick={() => {
                setCronometro(0);
                setRodando(false);
              }}
            >
              🔄 ZERAR
            </Button>
          </Box>

          <Box sx={{ mt: 3, p: 2, backgroundColor: "#ffe0b2", borderRadius: 1 }}>
            <Typography variant="subtitle2" fontWeight="bold">✅ Quando usar?</Typography>
            <Typography variant="body2">
              • Criar timers e cronômetros<br />
              • Adicionar/remover event listeners<br />
              • Abrir/fechar conexões (WebSocket, etc)
            </Typography>
          </Box>

          <Box sx={{ mt: 2, p: 2, backgroundColor: "#fff", borderRadius: 1, border: "2px dashed #ff9800" }}>
            <Typography variant="body2">
              <strong>⚠️ Por que o cleanup é importante?</strong><br />
              Se não limpar o timer, ele continua rodando mesmo quando pausado, causando problemas de memória e comportamento inesperado!
            </Typography>
          </Box>
        </Paper>
      </Grid>

      {/* Resumo Final */}
      <Grid size={{ xs: 12 }}>
        <Paper elevation={6} sx={{ padding: 4, backgroundColor: "#e8f5e9", border: "3px solid #4caf50" }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: "#2e7d32" }}>
            📝 Resumo Rápido
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2, height: "100%" }}>
                <Typography variant="h6" sx={{ color: "#1976d2", mb: 2 }}>
                  useEffect(() → {}, <strong>[]</strong>)
                </Typography>
                <Typography variant="body2">
                  Executa <strong>1 vez</strong> só<br />
                  Array vazio = "quando carregar"
                </Typography>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2, height: "100%" }}>
                <Typography variant="h6" sx={{ color: "#7b1fa2", mb: 2 }}>
                  useEffect(() → {}, <strong>[var]</strong>)
                </Typography>
                <Typography variant="body2">
                  Executa quando <strong>var mudar</strong><br />
                  Observa a variável especificada
                </Typography>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2, height: "100%" }}>
                <Typography variant="h6" sx={{ color: "#f57c00", mb: 2 }}>
                  useEffect(() → <strong>cleanup</strong>)
                </Typography>
                <Typography variant="body2">
                  <strong>return () → {}</strong> limpa<br />
                  Importante para timers/listeners
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}