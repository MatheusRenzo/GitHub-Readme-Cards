// Configuração do Jest para testes
export default {
  // Define o ambiente de teste como jsdom para simular o DOM do navegador
  testEnvironment: "jsdom",
  // Configurações de transformação (vazio por padrão)
  transform: {},
  // Padrão para encontrar arquivos de teste
  testMatch: ["**/tests/**/*.test.js"],
  // Arquivos de configuração executados após o ambiente de teste
  setupFilesAfterEnv: [],
};
