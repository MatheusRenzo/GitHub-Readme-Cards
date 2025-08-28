#!/usr/bin/env node

import express from "express";
import dotenv from "dotenv";

// Configurar dotenv apenas em desenvolvimento
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== "production";

// Middleware para parsear query strings (remover se não usar POST)
// app.use(express.urlencoded({ extended: true }));

// Rota de teste (apenas em desenvolvimento)
if (isDev) {
  app.get("/test", (req, res) => {
    res.json({
      message: "🚀 Servidor local funcionando!",
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV || "development",
      port: PORT,
    });
  });

  // Rota para verificar variáveis de ambiente (apenas em desenvolvimento)
  app.get("/env-check", (req, res) => {
    res.json({
      hasPat1: !!process.env.PAT_1,
      hasPat2: !!process.env.PAT_2,
      hasPat3: !!process.env.PAT_3,
      nodeEnv: process.env.NODE_ENV,
      port: process.env.PORT,
    });
  });
}

// Rota da API
app.get("/api", (req, res) => {
  res.json({
    message: "GitHub Readme Cards API",
    version: "1.0.0",
    description: "API para gerar cartões bonitos do GitHub para README",
    status: isDev ? "Servidor local rodando" : "API em produção",
    endpoints: isDev
      ? {
          "/test": "Rota de teste",
          "/api": "Informações da API",
          "/env-check": "Verificar variáveis de ambiente",
        }
      : {
          "/api": "Informações da API",
        },
  });
});

app.listen(PORT, () => {
  if (isDev) {
    console.log(`🚀 Servidor local rodando em http://localhost:${PORT}`);
    console.log(`📊 API disponível em http://localhost:${PORT}/api`);
    console.log(`🧪 Teste em http://localhost:${PORT}/test`);
    console.log(`🔍 Verificar env em http://localhost:${PORT}/env-check`);
    console.log(`💡 Use Ctrl+C para parar o servidor`);
  } else {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  }
});
