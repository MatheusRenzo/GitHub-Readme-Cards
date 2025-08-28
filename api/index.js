// Importa função para renderizar cartão de estatísticas
import { renderStatsCard } from "../src/cards/stats.js";
// Importa lista de usuários bloqueados
import { blacklist } from "../src/common/blacklist.js";
// Importa utilitários necessários
import {
  clampValue, // Função para limitar valores
  CONSTANTS, // Constantes do sistema
  parseArray, // Parser de arrays
  parseBoolean, // Parser de booleanos
  renderError, // Função para renderizar erros
} from "../src/common/utils.js";
// Importa função para buscar estatísticas
import { fetchStats } from "../src/fetchers/stats.js";
// Importa função para verificar disponibilidade de idioma
import { isLocaleAvailable } from "../src/translations.js";

// Função principal da API para gerar cartão de estatísticas
export default async (req, res) => {
  // Extrai todos os parâmetros da requisição
  const {
    username, // Nome de usuário do GitHub
    hide, // Estatísticas para ocultar
    hide_title, // Se deve ocultar o título
    hide_border, // Se deve ocultar a borda
    card_width, // Largura do cartão
    hide_rank, // Se deve ocultar o rank
    show_icons, // Se deve mostrar ícones
    include_all_commits, // Se deve incluir todos os commits
    line_height, // Altura da linha
    title_color, // Cor do título
    ring_color, // Cor do anel do rank
    icon_color, // Cor dos ícones
    text_color, // Cor do texto
    text_bold, // Se o texto deve ser em negrito
    bg_color, // Cor de fundo
    theme, // Tema do cartão
    cache_seconds, // Segundos de cache
    exclude_repo, // Repositórios para excluir
    custom_title, // Título personalizado
    locale, // Idioma
    disable_animations, // Se deve desabilitar animações
    border_radius, // Raio da borda
    number_format, // Formato dos números
    border_color, // Cor da borda
    rank_icon, // Ícone do rank
    show, // Estatísticas adicionais para mostrar
  } = req.query;

  // Define o tipo de conteúdo como SVG
  res.setHeader("Content-Type", "image/svg+xml");

  // Verifica se o usuário está na lista de bloqueados
  if (blacklist.includes(username)) {
    return res.send(
      renderError("Algo deu errado", "Este nome de usuário está bloqueado", {
        title_color,
        text_color,
        bg_color,
        border_color,
        theme,
      }),
    );
  }

  // Verifica se o idioma solicitado está disponível
  if (locale && !isLocaleAvailable(locale)) {
    return res.send(
      renderError("Algo deu errado", "Idioma não encontrado", {
        title_color,
        text_color,
        bg_color,
        border_color,
        theme,
      }),
    );
  }

  try {
    // Processa estatísticas adicionais para mostrar
    const showStats = parseArray(show);
    // Busca as estatísticas do usuário
    const stats = await fetchStats(
      username,
      parseBoolean(include_all_commits),
      parseArray(exclude_repo),
      showStats.includes("prs_merged") ||
        showStats.includes("prs_merged_percentage"),
      showStats.includes("discussions_started"),
      showStats.includes("discussions_answered"),
    );

    // Configura o tempo de cache
    let cacheSeconds = clampValue(
      parseInt(cache_seconds || CONSTANTS.CARD_CACHE_SECONDS, 10),
      CONSTANTS.TWELVE_HOURS,
      CONSTANTS.TWO_DAY,
    );
    // Permite sobrescrever o cache via variável de ambiente
    cacheSeconds = process.env.CACHE_SECONDS
      ? parseInt(process.env.CACHE_SECONDS, 10) || cacheSeconds
      : cacheSeconds;

    // Define os cabeçalhos de cache
    res.setHeader(
      "Cache-Control",
      `max-age=${cacheSeconds}, s-maxage=${cacheSeconds}, stale-while-revalidate=${CONSTANTS.ONE_DAY}`,
    );

    // Renderiza e retorna o cartão de estatísticas
    return res.send(
      renderStatsCard(stats, {
        hide: parseArray(hide),
        show_icons: parseBoolean(show_icons),
        hide_title: parseBoolean(hide_title),
        hide_border: parseBoolean(hide_border),
        card_width: parseInt(card_width, 10),
        hide_rank: parseBoolean(hide_rank),
        include_all_commits: parseBoolean(include_all_commits),
        line_height,
        title_color,
        ring_color,
        icon_color,
        text_color,
        text_bold: parseBoolean(text_bold),
        bg_color,
        theme,
        custom_title,
        border_radius,
        border_color,
        number_format,
        locale: locale ? locale.toLowerCase() : null,
        disable_animations: parseBoolean(disable_animations),
        rank_icon,
        show: showStats,
      }),
    );
  } catch (err) {
    res.setHeader(
      "Cache-Control",
      `max-age=${CONSTANTS.ERROR_CACHE_SECONDS / 2}, s-maxage=${
        CONSTANTS.ERROR_CACHE_SECONDS
      }, stale-while-revalidate=${CONSTANTS.ONE_DAY}`,
    ); // Use lower cache period for errors.
    return res.send(
      renderError(err.message, err.secondaryMessage, {
        title_color,
        text_color,
        bg_color,
        border_color,
        theme,
      }),
    );
  }
};
