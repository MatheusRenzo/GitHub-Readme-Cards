/**
 * Calcula a função de distribuição cumulativa exponencial.
 *
 * @param {number} x O valor.
 * @returns {number} A função de distribuição cumulativa exponencial.
 */
function exponential_cdf(x) {
  return 1 - 2 ** -x;
}

/**
 * Calcula a função de distribuição cumulativa log-normal.
 *
 * @param {number} x O valor.
 * @returns {number} A função de distribuição cumulativa log-normal.
 */
function log_normal_cdf(x) {
  // aproximação
  return x / (1 + x);
}

/**
 * Calcula o rank do usuário.
 *
 * @param {object} params Parâmetros dos quais o rank do usuário depende.
 * @param {boolean} params.all_commits Se `include_all_commits` foi usado.
 * @param {number} params.commits Número de commits.
 * @param {number} params.prs O número de pull requests.
 * @param {number} params.issues O número de issues.
 * @param {number} params.reviews O número de reviews.
 * @param {number} params.repos Número total de repositórios.
 * @param {number} params.stars O número de estrelas.
 * @param {number} params.followers O número de seguidores.
 * @returns {{level: string, percentile: number}}} O rank do usuário.
 */
function calculateRank({
  all_commits,
  commits,
  prs,
  issues,
  reviews,
  // eslint-disable-next-line no-unused-vars
  repos, // não utilizado
  stars,
  followers,
}) {
  // Mediana e peso para commits
  const COMMITS_MEDIAN = all_commits ? 1000 : 250,
    COMMITS_WEIGHT = 2;
  // Mediana e peso para pull requests
  const PRS_MEDIAN = 50,
    PRS_WEIGHT = 3;
  // Mediana e peso para issues
  const ISSUES_MEDIAN = 25,
    ISSUES_WEIGHT = 1;
  // Mediana e peso para reviews
  const REVIEWS_MEDIAN = 2,
    REVIEWS_WEIGHT = 1;
  // Mediana e peso para estrelas
  const STARS_MEDIAN = 50,
    STARS_WEIGHT = 4;
  // Mediana e peso para seguidores
  const FOLLOWERS_MEDIAN = 10,
    FOLLOWERS_WEIGHT = 1;

  // Calcula o peso total somando todos os pesos
  const TOTAL_WEIGHT =
    COMMITS_WEIGHT +
    PRS_WEIGHT +
    ISSUES_WEIGHT +
    REVIEWS_WEIGHT +
    STARS_WEIGHT +
    FOLLOWERS_WEIGHT;

  // Limites percentuais para definir os níveis
  const THRESHOLDS = [1, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
  // Níveis de rank disponíveis
  const LEVELS = ["S", "A+", "A", "A-", "B+", "B", "B-", "C+", "C"];

  // Calcula o rank baseado na média ponderada das estatísticas
  const rank =
    1 -
    (COMMITS_WEIGHT * exponential_cdf(commits / COMMITS_MEDIAN) +
      PRS_WEIGHT * exponential_cdf(prs / PRS_MEDIAN) +
      ISSUES_WEIGHT * exponential_cdf(issues / ISSUES_MEDIAN) +
      REVIEWS_WEIGHT * exponential_cdf(reviews / REVIEWS_MEDIAN) +
      STARS_WEIGHT * log_normal_cdf(stars / STARS_MEDIAN) +
      FOLLOWERS_WEIGHT * log_normal_cdf(followers / FOLLOWERS_MEDIAN)) /
      TOTAL_WEIGHT;

  // Determina o nível baseado no rank calculado
  const level = LEVELS[THRESHOLDS.findIndex((t) => rank * 100 <= t)];

  // Retorna o nível e o percentil
  return { level, percentile: rank * 100 };
}

// Exporta a função de cálculo de rank
export { calculateRank };
export default calculateRank;
