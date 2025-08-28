// Configuração de todos os temas disponíveis para os cartões
export const themes = {
  // Tema padrão - cores clássicas do GitHub
  default: {
    title_color: "2f80ed", // Azul para o título
    icon_color: "4c71f2", // Azul para os ícones
    text_color: "434d58", // Cinza escuro para o texto
    bg_color: "fffefe", // Branco para o fundo
    border_color: "e4e2e2", // Cinza claro para a borda
  },
  // Tema padrão para cartões de repositório
  default_repocard: {
    title_color: "2f80ed", // Azul para o título
    icon_color: "586069", // Cor do ícone é diferente
    text_color: "434d58", // Cinza escuro para o texto
    bg_color: "fffefe", // Branco para o fundo
  },
  // Tema transparente - fundo transparente
  transparent: {
    title_color: "006AFF", // Azul para o título
    icon_color: "0579C3", // Azul para os ícones
    text_color: "417E87", // Azul acinzentado para o texto
    bg_color: "ffffff00", // Fundo transparente
  },
  // Tema sombra vermelha
  shadow_red: {
    title_color: "9A0000", // Vermelho escuro para o título
    text_color: "444", // Cinza escuro para o texto
    icon_color: "4F0000", // Vermelho muito escuro para os ícones
    border_color: "4F0000", // Vermelho muito escuro para a borda
    bg_color: "ffffff00", // Fundo transparente
  },
  // Tema sombra verde
  shadow_green: {
    title_color: "007A00", // Verde escuro para o título
    text_color: "444", // Cinza escuro para o texto
    icon_color: "003D00", // Verde muito escuro para os ícones
    border_color: "003D00", // Verde muito escuro para a borda
    bg_color: "ffffff00", // Fundo transparente
  },
  // Tema sombra azul
  shadow_blue: {
    title_color: "00779A", // Azul escuro para o título
    text_color: "444", // Cinza escuro para o texto
    icon_color: "004450", // Azul muito escuro para os ícones
    border_color: "004490", // Azul muito escuro para a borda
    bg_color: "ffffff00", // Fundo transparente
  },
  // Tema escuro
  dark: {
    title_color: "fff", // Branco para o título
    icon_color: "79ff97", // Verde claro para os ícones
    text_color: "9f9f9f", // Cinza claro para o texto
    bg_color: "151515", // Preto escuro para o fundo
  },
  // Tema radical - cores vibrantes
  radical: {
    title_color: "fe428e", // Rosa para o título
    icon_color: "f8d847", // Amarelo para os ícones
    text_color: "a9fef7", // Azul claro para o texto
    bg_color: "141321", // Preto muito escuro para o fundo
  },
  // Tema merko - cores verdes
  merko: {
    title_color: "abd200", // Verde para o título
    icon_color: "b7d364", // Verde claro para os ícones
    text_color: "68b587", // Verde acinzentado para o texto
    bg_color: "0a0f0b", // Preto esverdeado para o fundo
  },
  // Tema gruvbox - cores terrosas
  gruvbox: {
    title_color: "fabd2f", // Amarelo para o título
    icon_color: "fe8019", // Laranja para os ícones
    text_color: "8ec07c", // Verde para o texto
    bg_color: "282828", // Cinza escuro para o fundo
  },
  // Tema gruvbox claro
  gruvbox_light: {
    title_color: "b57614", // Marrom para o título
    icon_color: "af3a03", // Marrom escuro para os ícones
    text_color: "427b58", // Verde escuro para o texto
    bg_color: "fbf1c7", // Bege claro para o fundo
  },
  // Tema tokyonight - cores noturnas
  tokyonight: {
    title_color: "70a5fd", // Azul para o título
    icon_color: "bf91f3", // Roxo para os ícones
    text_color: "38bdae", // Verde azulado para o texto
    bg_color: "1a1b27", // Azul muito escuro para o fundo
  },
  // Tema onedark - cores escuras
  onedark: {
    title_color: "e4bf7a", // Dourado para o título
    icon_color: "8eb573", // Verde para os ícones
    text_color: "df6d74", // Rosa para o texto
    bg_color: "282c34", // Cinza escuro para o fundo
  },
  // Tema cobalt - cores azuis
  cobalt: {
    title_color: "e683d9", // Rosa para o título
    icon_color: "0480ef", // Azul para os ícones
    text_color: "75eeb2", // Verde claro para o texto
    bg_color: "193549", // Azul escuro para o fundo
  },
  // Tema synthwave - cores neon
  synthwave: {
    title_color: "e2e9ec", // Cinza claro para o título
    icon_color: "ef8539", // Laranja para os ícones
    text_color: "e5289e", // Rosa para o texto
    bg_color: "2b213a", // Roxo escuro para o fundo
  },
  // Tema alto contraste
  highcontrast: {
    title_color: "e7f216", // Amarelo para o título
    icon_color: "00ffff", // Ciano para os ícones
    text_color: "fff", // Branco para o texto
    bg_color: "000", // Preto para o fundo
  },
  // Tema dracula - cores escuras
  dracula: {
    title_color: "ff6e96", // Rosa para o título
    icon_color: "79dafa", // Azul claro para os ícones
    text_color: "f8f8f2", // Branco para o texto
    bg_color: "282a36", // Cinza escuro para o fundo
  },
  // Tema prussian - cores azuis
  prussian: {
    title_color: "bddfff", // Azul claro para o título
    icon_color: "38a0ff", // Azul para os ícones
    text_color: "6e93b5", // Azul acinzentado para o texto
    bg_color: "172f45", // Azul escuro para o fundo
  },
  // Tema monokai - cores escuras
  monokai: {
    title_color: "eb1f6a", // Rosa para o título
    icon_color: "e28905", // Laranja para os ícones
    text_color: "f1f1eb", // Cinza claro para o texto
    bg_color: "272822", // Cinza escuro para o fundo
  },
  // Tema vue - cores azuis
  vue: {
    title_color: "41b883", // Verde para o título
    icon_color: "41b883", // Verde para os ícones
    text_color: "273849", // Cinza escuro para o texto
    bg_color: "fffefe", // Branco para o fundo
  },
  // Tema vue-dark - cores escuras
  "vue-dark": {
    title_color: "41b883", // Verde para o título
    icon_color: "41b883", // Verde para os ícones
    text_color: "fffefe", // Branco para o texto
    bg_color: "273849", // Cinza escuro para o fundo
  },
  // Tema shades-of-purple - cores neon
  "shades-of-purple": {
    title_color: "fad000", // Amarelo para o título
    icon_color: "b362ff", // Roxo para os ícones
    text_color: "a599e9", // Azul claro para o texto
    bg_color: "2d2b55", // Cinza escuro para o fundo
  },
  // Tema nightowl - cores escuras
  nightowl: {
    title_color: "c792ea", // Roxo para o título
    icon_color: "ffeb95", // Amarelo para os ícones
    text_color: "7fdbca", // Verde acinzentado para o texto
    bg_color: "011627", // Cinza escuro para o fundo
  },
  // Tema buefy - cores azuis
  buefy: {
    title_color: "7957d5", // Roxo para o título
    icon_color: "ff3860", // Vermelho para os ícones
    text_color: "363636", // Cinza escuro para o texto
    bg_color: "ffffff", // Branco para o fundo
  },
  // Tema blue-green - cores azuis
  "blue-green": {
    title_color: "2f97c1", // Azul para o título
    icon_color: "f5b700", // Amarelo para os ícones
    text_color: "0cf574", // Verde para o texto
    bg_color: "040f0f", // Cinza escuro para o fundo
  },
  // Tema algolia - cores azuis
  algolia: {
    title_color: "00AEFF", // Azul para o título
    icon_color: "2DDE98", // Verde para os ícones
    text_color: "FFFFFF", // Branco para o texto
    bg_color: "050F2C", // Cinza escuro para o fundo
  },
  // Tema great-gatsby - cores azuis
  "great-gatsby": {
    title_color: "ffa726", // Amarelo para o título
    icon_color: "ffb74d", // Amarelo para os ícones
    text_color: "ffd95b", // Amarelo para o texto
    bg_color: "000000", // Preto para o fundo
  },
  // Tema darcula - cores escuras
  darcula: {
    title_color: "BA5F17", // Marrom para o título
    icon_color: "84628F", // Roxo para os ícones
    text_color: "BEBEBE", // Cinza claro para o texto
    bg_color: "242424", // Cinza escuro para o fundo
  },
  // Tema bear - cores escuras
  bear: {
    title_color: "e03c8a", // Rosa para o título
    icon_color: "00AEFF", // Azul para os ícones
    text_color: "bcb28d", // Cinza claro para o texto
    bg_color: "1f2023", // Cinza escuro para o fundo
  },
  // Tema solarized-dark - cores escuras
  "solarized-dark": {
    title_color: "268bd2", // Azul para o título
    icon_color: "b58900", // Amarelo para os ícones
    text_color: "859900", // Verde para o texto
    bg_color: "002b36", // Cinza escuro para o fundo
  },
  // Tema solarized-light - cores claras
  "solarized-light": {
    title_color: "268bd2", // Azul para o título
    icon_color: "b58900", // Amarelo para os ícones
    text_color: "859900", // Verde para o texto
    bg_color: "fdf6e3", // Bege claro para o fundo
  },
  // Tema chartreuse-dark - cores escuras
  "chartreuse-dark": {
    title_color: "7fff00", // Verde para o título
    icon_color: "00AEFF", // Azul para os ícones
    text_color: "fff", // Branco para o texto
    bg_color: "000", // Preto para o fundo
  },
  // Tema nord - cores azuis
  nord: {
    title_color: "81a1c1", // Cinza claro para o título
    text_color: "d8dee9", // Cinza claro para o texto
    icon_color: "88c0d0", // Azul claro para os ícones
    bg_color: "2e3440", // Cinza escuro para o fundo
  },
  // Tema gotham - cores azuis
  gotham: {
    title_color: "2aa889", // Verde para o título
    icon_color: "599cab", // Azul para os ícones
    text_color: "99d1ce", // Cinza claro para o texto
    bg_color: "0c1014", // Cinza escuro para o fundo
  },
  // Tema material-palenight - cores escuras
  "material-palenight": {
    title_color: "c792ea", // Roxo para o título
    icon_color: "89ddff", // Azul claro para os ícones
    text_color: "a6accd", // Cinza claro para o texto
    bg_color: "292d3e", // Cinza escuro para o fundo
  },
  // Tema graywhite - cores cinza
  graywhite: {
    title_color: "24292e", // Cinza para o título
    icon_color: "24292e", // Cinza para os ícones
    text_color: "24292e", // Cinza para o texto
    bg_color: "ffffff", // Branco para o fundo
  },
  // Tema vision-friendly-dark - cores escuras
  "vision-friendly-dark": {
    title_color: "ffb000", // Amarelo para o título
    icon_color: "785ef0", // Roxo para os ícones
    text_color: "ffffff", // Branco para o texto
    bg_color: "000000", // Preto para o fundo
  },
  // Tema ayu-mirage - cores escuras
  "ayu-mirage": {
    title_color: "f4cd7c", // Amarelo para o título
    icon_color: "73d0ff", // Azul claro para os ícones
    text_color: "c7c8c2", // Cinza claro para o texto
    bg_color: "1f2430", // Cinza escuro para o fundo
  },
  // Tema midnight-purple - cores escuras
  "midnight-purple": {
    title_color: "9745f5", // Roxo para o título
    icon_color: "9f4bff", // Roxo para os ícones
    text_color: "ffffff", // Branco para o texto
    bg_color: "000000", // Preto para o fundo
  },
  // Tema calm - cores escuras
  calm: {
    title_color: "e07a5f", // Marrom para o título
    icon_color: "edae49", // Amarelo para os ícones
    text_color: "ebcfb2", // Cinza claro para o texto
    bg_color: "373f51", // Cinza escuro para o fundo
  },
  // Tema flag-india - cores azuis
  "flag-india": {
    title_color: "ff8f1c", // Laranja para o título
    icon_color: "250E62", // Azul para os ícones
    text_color: "509E2F", // Verde para o texto
    bg_color: "ffffff", // Branco para o fundo
  },
  // Tema omni - cores azuis
  omni: {
    title_color: "FF79C6", // Roxo para o título
    icon_color: "e7de79", // Amarelo para os ícones
    text_color: "E1E1E6", // Cinza claro para o texto
    bg_color: "191622", // Cinza escuro para o fundo
  },
  // Tema react - cores azuis
  react: {
    title_color: "61dafb", // Azul para o título
    icon_color: "61dafb", // Azul para os ícones
    text_color: "ffffff", // Branco para o texto
    bg_color: "20232a", // Cinza escuro para o fundo
  },
  // Tema jolly - cores escuras
  jolly: {
    title_color: "ff64da", // Roxo para o título
    icon_color: "a960ff", // Roxo para os ícones
    text_color: "ffffff", // Branco para o texto
    bg_color: "291B3E", // Cinza escuro para o fundo
  },
  // Tema maroongold - cores escuras
  maroongold: {
    title_color: "F7EF8A", // Amarelo para o título
    icon_color: "F7EF8A", // Amarelo para os ícones
    text_color: "E0AA3E", // Amarelo para o texto
    bg_color: "260000", // Cinza escuro para o fundo
  },
  // Tema yeblu - cores azuis
  yeblu: {
    title_color: "ffff00", // Amarelo para o título
    icon_color: "ffff00", // Amarelo para os ícones
    text_color: "ffffff", // Branco para o texto
    bg_color: "002046", // Cinza escuro para o fundo
  },
  // Tema blueberry - cores azuis
  blueberry: {
    title_color: "82aaff", // Azul para o título
    icon_color: "89ddff", // Azul para os ícones
    text_color: "27e8a7", // Verde para o texto
    bg_color: "242938", // Cinza escuro para o fundo
  },
  // Tema slateorange - cores escuras
  slateorange: {
    title_color: "faa627", // Laranja para o título
    icon_color: "faa627", // Laranja para os ícones
    text_color: "ffffff", // Branco para o texto
    bg_color: "36393f", // Cinza escuro para o fundo
  },
  // Tema kacho_ga - cores escuras
  kacho_ga: {
    title_color: "bf4a3f", // Marrom para o título
    icon_color: "a64833", // Marrom para os ícones
    text_color: "d9c8a9", // Cinza claro para o texto
    bg_color: "402b23", // Cinza escuro para o fundo
  },
  // Tema outrun - cores azuis
  outrun: {
    title_color: "ffcc00", // Amarelo para o título
    icon_color: "ff1aff", // Roxo para os ícones
    text_color: "8080ff", // Azul para o texto
    bg_color: "141439", // Cinza escuro para o fundo
  },
  // Tema ocean_dark - cores escuras
  ocean_dark: {
    title_color: "8957B2", // Roxo para o título
    icon_color: "FFFFFF", // Branco para os ícones
    text_color: "92D534", // Verde para o texto
    bg_color: "151A28", // Cinza escuro para o fundo
  },
  // Tema city_lights - cores azuis
  city_lights: {
    title_color: "5D8CB3", // Azul para o título
    icon_color: "4798FF", // Azul para os ícones
    text_color: "718CA1", // Cinza claro para o texto
    bg_color: "1D252C", // Cinza escuro para o fundo
  },
  // Tema github_dark - cores azuis
  github_dark: {
    title_color: "58A6FF", // Azul para o título
    icon_color: "1F6FEB", // Azul para os ícones
    text_color: "C3D1D9", // Cinza claro para o texto
    bg_color: "0D1117", // Cinza escuro para o fundo
  },
  // Tema github_dark_dimmed - cores escuras
  github_dark_dimmed: {
    title_color: "539bf5", // Azul para o título
    icon_color: "539bf5", // Azul para os ícones
    text_color: "ADBAC7", // Cinza claro para o texto
    bg_color: "24292F", // Cinza escuro para o fundo
    border_color: "373E47", // Cinza escuro para a borda
  },
  // Tema discord_old_blurple - cores azuis
  discord_old_blurple: {
    title_color: "7289DA", // Roxo para o título
    icon_color: "7289DA", // Roxo para os ícones
    text_color: "FFFFFF", // Branco para o texto
    bg_color: "2C2F33", // Cinza escuro para o fundo
  },
  // Tema aura_dark - cores escuras
  aura_dark: {
    title_color: "ff7372", // Laranja para o título
    icon_color: "6cffd0", // Verde claro para os ícones
    text_color: "dbdbdb", // Cinza claro para o texto
    bg_color: "252334", // Cinza escuro para o fundo
  },
  // Tema panda - cores escuras
  panda: {
    title_color: "19f9d899", // Roxo para o título
    icon_color: "19f9d899", // Roxo para os ícones
    text_color: "FF75B5", // Rosa para o texto
    bg_color: "31353a", // Cinza escuro para o fundo
  },
  // Tema noctis_minimus - cores escuras
  noctis_minimus: {
    title_color: "d3b692", // Cinza claro para o título
    icon_color: "72b7c0", // Azul claro para os ícones
    text_color: "c5cdd3", // Cinza claro para o texto
    bg_color: "1b2932", // Cinza escuro para o fundo
  },
  // Tema cobalt2 - cores azuis
  cobalt2: {
    title_color: "ffc600", // Amarelo para o título
    icon_color: "ffffff", // Branco para os ícones
    text_color: "0088ff", // Azul para o texto
    bg_color: "193549", // Cinza escuro para o fundo
  },
  // Tema swift - cores escuras
  swift: {
    title_color: "000000", // Preto para o título
    icon_color: "f05237", // Vermelho para os ícones
    text_color: "000000", // Preto para o texto
    bg_color: "f7f7f7", // Cinza claro para o fundo
  },
  // Tema aura - cores escuras
  aura: {
    title_color: "a277ff", // Roxo para o título
    icon_color: "ffca85", // Amarelo para os ícones
    text_color: "61ffca", // Verde claro para o texto
    bg_color: "15141b", // Cinza escuro para o fundo
  },
  // Tema apprentice - cores escuras
  apprentice: {
    title_color: "ffffff", // Branco para o título
    icon_color: "ffffaf", // Amarelo para os ícones
    text_color: "bcbcbc", // Cinza claro para o texto
    bg_color: "262626", // Cinza escuro para o fundo
  },
  // Tema moltack - cores escuras
  moltack: {
    title_color: "86092C", // Marrom para o título
    icon_color: "86092C", // Marrom para os ícones
    text_color: "574038", // Cinza escuro para o texto
    bg_color: "F5E1C0", // Cinza claro para o fundo
  },
  // Tema codeSTACKr - cores escuras
  codeSTACKr: {
    title_color: "ff652f", // Laranja para o título
    icon_color: "FFE400", // Amarelo para os ícones
    text_color: "ffffff", // Branco para o texto
    bg_color: "09131B", // Cinza escuro para o fundo
    border_color: "0c1a25", // Cinza escuro para a borda
  },
  // Tema rose_pine - cores escuras
  rose_pine: {
    title_color: "9ccfd8", // Cinza claro para o título
    icon_color: "ebbcba", // Cinza escuro para os ícones
    text_color: "e0def4", // Cinza claro para o texto
    bg_color: "191724", // Cinza escuro para o fundo
  },
  // Tema catppuccin_latte - cores escuras
  catppuccin_latte: {
    title_color: "137980", // Cinza escuro para o título
    icon_color: "8839ef", // Roxo para os ícones
    text_color: "4c4f69", // Cinza escuro para o texto
    bg_color: "eff1f5", // Cinza claro para o fundo
  },
  // Tema catppuccin_mocha - cores escuras
  catppuccin_mocha: {
    title_color: "94e2d5", // Cinza claro para o título
    icon_color: "cba6f7", // Roxo para os ícones
    text_color: "cdd6f4", // Cinza claro para o texto
    bg_color: "1e1e2e", // Cinza escuro para o fundo
  },
  // Tema date_night - cores escuras
  date_night: {
    title_color: "DA7885", // Rosa para o título
    text_color: "E1B2A2", // Cinza claro para o texto
    icon_color: "BB8470", // Cinza escuro para o texto
    border_color: "170F0C", // Cinza escuro para a borda
    bg_color: "170F0C", // Cinza escuro para o fundo
  },
  // Tema one_dark_pro - cores escuras
  one_dark_pro: {
    title_color: "61AFEF", // Azul para o título
    text_color: "E5C06E", // Amarelo para o texto
    icon_color: "C678DD", // Roxo para os ícones
    border_color: "3B4048", // Cinza escuro para a borda
    bg_color: "23272E", // Cinza escuro para o fundo
  },
  // Tema rose - cores escuras
  rose: {
    title_color: "8d192b", // Marrom para o título
    text_color: "862931", // Cinza escuro para o texto
    icon_color: "B71F36", // Marrom para os ícones
    border_color: "e9d8d4", // Cinza claro para a borda
    bg_color: "e9d8d4", // Cinza claro para o fundo
  },
  // Tema holi - cores escuras
  holi: {
    title_color: "5FABEE", // Azul para o título
    text_color: "D6E7FF", // Cinza claro para o texto
    icon_color: "5FABEE", // Azul para os ícones
    border_color: "85A4C0", // Cinza escuro para a borda
    bg_color: "030314", // Cinza escuro para o fundo
  },
  // Tema neon - cores escuras
  neon: {
    title_color: "00EAD3", // Verde para o título
    text_color: "FF449F", // Roxo para o texto
    icon_color: "00EAD3", // Verde para os ícones
    border_color: "ffffff", // Branco para a borda
    bg_color: "000000", // Preto para o fundo
  },
  // Tema blue_navy - cores escuras
  blue_navy: {
    title_color: "82AAFF", // Azul para o título
    text_color: "82AAFF", // Azul para o texto
    icon_color: "82AAFF", // Azul para os ícones
    border_color: "ffffff", // Branco para a borda
    bg_color: "000000", // Preto para o fundo
  },
  // Tema calm_pink - cores escuras
  calm_pink: {
    title_color: "e07a5f", // Marrom para o título
    text_color: "edae49", // Amarelo para o texto
    icon_color: "ebcfb2", // Cinza claro para o texto
    border_color: "e1bc29", // Amarelo para a borda
    bg_color: "2b2d40", // Cinza escuro para o fundo
  },
  // Tema ambient_gradient - cores escuras
  ambient_gradient: {
    title_color: "ffffff", // Branco para o título
    text_color: "ffffff", // Branco para o texto
    icon_color: "ffffff", // Branco para os ícones
    bg_color: "35,4158d0,c850c0,ffcc70", // Cores para o fundo (formato hexadecimal)
  },
};

export default themes;
