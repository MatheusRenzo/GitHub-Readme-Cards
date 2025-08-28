#!/usr/bin/env node

import express from "express";
import dotenv from "dotenv";

// Importar as funções da API
import apiIndex from "./api/index.js";
import apiPin from "./api/pin.js";
import apiTopLangs from "./api/top-langs.js";
import apiWakatime from "./api/wakatime.js";
import apiGist from "./api/gist.js";
import apiStatusUp from "./api/status/up.js";
import apiPatInfo from "./api/status/pat-info.js";
import apiInfo from "./api/api-info.js";

// Configurar dotenv apenas em desenvolvimento
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== "production";

// Middleware para parsear query strings
app.use(express.urlencoded({ extended: true }));

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

// Rota da API principal
app.get("/api", async (req, res) => {
  try {
    await apiInfo(req, res);
  } catch (error) {
    console.error("Erro na rota /api:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota raiz - redireciona para a API principal
app.get("/", async (req, res) => {
  try {
    await apiIndex(req, res);
  } catch (error) {
    console.error("Erro na rota /:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota para cartão de repositório
app.get("/pin", async (req, res) => {
  try {
    await apiPin(req, res);
  } catch (error) {
    console.error("Erro na rota /pin:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota para top linguagens
app.get("/top-langs", async (req, res) => {
  try {
    await apiTopLangs(req, res);
  } catch (error) {
    console.error("Erro na rota /top-langs:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota para WakaTime
app.get("/wakatime", async (req, res) => {
  try {
    await apiWakatime(req, res);
  } catch (error) {
    console.error("Erro na rota /wakatime:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota para Gist
app.get("/gist", async (req, res) => {
  try {
    await apiGist(req, res);
  } catch (error) {
    console.error("Erro na rota /gist:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota para status da API
app.get("/status/up", async (req, res) => {
  try {
    await apiStatusUp(req, res);
  } catch (error) {
    console.error("Erro na rota /status/up:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota para informações dos tokens
app.get("/status/pat-info", async (req, res) => {
  try {
    await apiPatInfo(req, res);
  } catch (error) {
    console.error("Erro na rota /status/pat-info:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.listen(PORT, () => {
  if (isDev) {
    console.log(`🚀 Servidor local rodando em http://localhost:${PORT}`);
    console.log(`📊 API disponível em http://localhost:${PORT}/api`);
    console.log(`🧪 Teste em http://localhost:${PORT}/test`);
    console.log(`🔍 Verificar env em http://localhost:${PORT}/env-check`);
    console.log(`📈 Cartões disponíveis:`);
    console.log(
      `   - Estatísticas: http://localhost:${PORT}/?username=SEU_USERNAME`
    );
    console.log(
      `   - Repositório: http://localhost:${PORT}/pin?username=SEU_USERNAME&repo=REPO_NAME`
    );
    console.log(
      `   - Top Linguagens: http://localhost:${PORT}/top-langs?username=SEU_USERNAME`
    );
    console.log(
      `   - WakaTime: http://localhost:${PORT}/wakatime?username=SEU_USERNAME`
    );
    console.log(`   - Gist: http://localhost:${PORT}/gist?gist_id=GIST_ID`);
    console.log(`💡 Use Ctrl+C para parar o servidor`);
  } else {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  }
});
