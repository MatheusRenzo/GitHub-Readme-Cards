// Importa configurações de variáveis de ambiente
import "dotenv/config";
// Importa o cartão de estatísticas da API
import statsCard from "./api/index.js";
// Importa o cartão de repositório da API
import repoCard from "./api/pin.js";
// Importa o cartão de linguagens da API
import langCard from "./api/top-langs.js";
// Importa o cartão do WakaTime da API
import wakatimeCard from "./api/wakatime.js";
// Importa o cartão de Gist da API
import gistCard from "./api/gist.js";
// Importa as rotas de status da API
import statusUp from "./api/status/up.js";
import patInfo from "./api/status/pat-info.js";
// Importa o framework Express
import express from "express";

// Cria uma instância do aplicativo Express
const app = express();
// Inicia o servidor na porta definida nas variáveis de ambiente ou porta 9000
app.listen(process.env.port || 9000);

// Define as rotas da API
app.get("/", statsCard); // Rota principal para estatísticas
app.get("/pin", repoCard); // Rota para cartão de repositório
app.get("/top-langs", langCard); // Rota para cartão de linguagens
app.get("/wakatime", wakatimeCard); // Rota para cartão do WakaTime
app.get("/gist", gistCard); // Rota para cartão de Gist

// Rotas de status da API
app.get("/status/up", statusUp); // Rota para verificar se os PATs estão funcionando
app.get("/status/pat-info", patInfo); // Rota para informações sobre os PATs

// Rota /api que retorna informações sobre as rotas disponíveis
app.get("/api", (req, res) => {
  res.json({
    message: "GitHub Readme Cards API",
    version: "1.0.0",
    description: "API para gerar cartões bonitos do GitHub para README",
    endpoints: {
      "/": "Cartão de estatísticas do GitHub",
      "/pin": "Cartão de repositório",
      "/top-langs": "Cartão de linguagens mais usadas",
      "/wakatime": "Cartão do WakaTime",
      "/gist": "Cartão de Gist",
      "/status/up": "Verificar status dos PATs (up/down)",
      "/status/pat-info": "Informações detalhadas sobre os PATs",
      "/api": "Informações da API (esta rota)",
    },
    usage: {
      stats: "GET /?username=SEU_USERNAME",
      pin: "GET /pin?repo=USUARIO/REPOSITORIO",
      topLangs: "GET /top-langs?username=SEU_USERNAME",
      wakatime: "GET /wakatime?username=SEU_USERNAME",
      gist: "GET /gist?gist_id=ID_DO_GIST",
      statusUp: "GET /status/up?type=shields|json|boolean",
      patInfo: "GET /status/pat-info",
    },
  });
});
