// Arquivo de índice que exporta todas as funcionalidades comuns
// Exporta a lista de repositórios bloqueados
export { blacklist } from "./blacklist.js";
// Exporta a classe base para cartões
export { Card } from "./Card.js";
// Exporta função para criar nós de progresso
export { createProgressNode } from "./createProgressNode.js";
// Exporta sistema de internacionalização
export { I18n } from "./I18n.js";
// Exporta ícones disponíveis
export { icons } from "./icons.js";
// Exporta função de retry para requisições
export { retryer } from "./retryer.js";
// Exporta utilitários e constantes
export {
  ERROR_CARD_LENGTH, // Comprimento máximo do cartão de erro
  renderError, // Função para renderizar erros
  encodeHTML, // Função para codificar HTML
  kFormatter, // Formatador de números (ex: 1k, 1M)
  isValidHexColor, // Validador de cores hexadecimais
  parseBoolean, // Parser de valores booleanos
  parseArray, // Parser de arrays
  clampValue, // Função para limitar valores
  isValidGradient, // Validador de gradientes
  fallbackColor, // Cor padrão de fallback
  request, // Função de requisição HTTP
  flexLayout, // Sistema de layout flexível
  getCardColors, // Função para obter cores do cartão
  wrapTextMultiline, // Função para quebrar texto em múltiplas linhas
  logger, // Sistema de logging
  CONSTANTS, // Constantes do sistema
  CustomError, // Classe de erro personalizada
  MissingParamError, // Classe de erro para parâmetros ausentes
  measureText, // Função para medir texto
  lowercaseTrim, // Função para converter para minúsculas e remover espaços
  chunkArray, // Função para dividir arrays em chunks
  parseEmojis, // Função para processar emojis
} from "./utils.js";
