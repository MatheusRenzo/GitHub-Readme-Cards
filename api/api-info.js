export default async (req, res) => {
  // Define o tipo de conteúdo como JSON
  res.setHeader("Content-Type", "application/json");

  // Retorna informações sobre a API
  return res.json({
    message: "GitHub Readme Cards API",
    version: "1.0.0",
    description: "API para gerar cartões bonitos do GitHub para README",
    status: "API em produção",
    endpoints: {
      "/": "Cartão de estatísticas - use ?username=SEU_USERNAME",
      "/pin":
        "Cartão de repositório - use ?username=SEU_USERNAME&repo=REPO_NAME",
      "/top-langs": "Top linguagens - use ?username=SEU_USERNAME",
      "/wakatime": "Estatísticas WakaTime - use ?username=SEU_USERNAME",
      "/gist": "Cartão de Gist - use ?gist_id=GIST_ID",
      "/status/up": "Status da API",
      "/status/pat-info": "Informações dos tokens",
    },
    example:
      "Para gerar um cartão de estatísticas, acesse: /?username=SEU_USERNAME",
    documentation: "https://github.com/MatheusRenzo/GitHub-Readme-Cards",
  });
};
