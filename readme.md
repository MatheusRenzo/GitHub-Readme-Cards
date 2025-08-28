# 🚀 GitHub Readme Cards

[![GitHub Stars](https://img.shields.io/github/stars/MatheusRenzo/GitHub-Readme-Cards?style=for-the-badge&logo=github&color=gold)](https://github.com/MatheusRenzo/GitHub-Readme-Cards/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/MatheusRenzo/GitHub-Readme-Cards?style=for-the-badge&logo=github&color=blue)](https://github.com/MatheusRenzo/GitHub-Readme-Cards/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/MatheusRenzo/GitHub-Readme-Cards?style=for-the-badge&logo=github&color=red)](https://github.com/MatheusRenzo/GitHub-Readme-Cards/issues)
[![GitHub License](https://img.shields.io/github/license/MatheusRenzo/GitHub-Readme-Cards?style=for-the-badge&logo=github&color=green)](https://github.com/MatheusRenzo/GitHub-Readme-Cards/blob/master/LICENSE)
[![Vercel Deploy](https://img.shields.io/badge/Deploy%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Node.js Version](https://img.shields.io/badge/Node.js-18.0.0+-green?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-100%25-yellow?style=for-the-badge&logo=javascript)](https://github.com/MatheusRenzo/GitHub-Readme-Cards)

> 🎨 **Gera dinamicamente cartões bonitos e personalizáveis do GitHub para seu README com estatísticas em tempo real!**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Here-blue?style=for-the-badge&logo=vercel)](https://git-hub-readme-cards.vercel.app)
[![API Status](https://img.shields.io/badge/API-Status-green?style=for-the-badge&logo=api)](https://git-hub-readme-cards.vercel.app/status/up)

---

## 📋 **Índice**

- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Instalação](#-instalação)
- [⚙️ Configuração](#️-configuração)
- [🎯 Casos de Uso](#-casos-de-uso)
- [🔧 API Endpoints](#-api-endpoints)
- [🎨 Temas Disponíveis](#-temas-disponíveis)
- [📊 Parâmetros de Personalização por Card](#-parâmetros-de-personalização-por-card)
- [🌐 Exemplos Práticos por Tipo de Card](#-exemplos-práticos-por-tipo-de-card)
- [💡 Dicas Rápidas de Personalização](#-dicas-rápidas-de-personalização)
- [🔍 Troubleshooting](#-troubleshooting)
- [🤝 Contribuindo](#-contribuindo)
- [📈 Roadmap](#-roadmap)
- [📄 Licença](#-licença)

---

## ✨ **Funcionalidades**

### 🎯 **Cartões Disponíveis**

- 📊 **Estatísticas Gerais** - Stars, forks, commits, contribuições
- 🌟 **Top Linguagens** - Linguagens mais usadas com porcentagens
- 📁 **Repositórios** - Cards de repositórios específicos
- ⏰ **WakaTime** - Estatísticas de tempo de codificação
- 📝 **Gists** - Cards de gists populares
- 🔍 **Status da API** - Monitoramento de saúde

### 🎨 **Personalização Avançada**

- 🎨 **Temas** - 20+ temas pré-definidos
- 🌈 **Cores Customizáveis** - Todas as cores personalizáveis
- 📱 **Layouts Responsivos** - Compact, donut, pie
- 🔧 **Configurações Flexíveis** - Ocultar/mostrar elementos
- 🌍 **Multi-idioma** - Suporte a 15+ idiomas

### ⚡ **Performance & Confiabilidade**

- 🚀 **Cache Inteligente** - Reduz requisições à API do GitHub
- 🔄 **Rate Limiting** - Múltiplos tokens para alta demanda
- 📈 **Monitoramento** - Status em tempo real da API
- 🛡️ **Tratamento de Erros** - Mensagens claras e úteis

---

## 🚀 **Instalação**

### **1. Clone o Repositório**

```bash
git clone https://github.com/MatheusRenzo/GitHub-Readme-Cards.git
cd GitHub-Readme-Cards
```

### **2. Instale as Dependências**

```bash
npm install
```

### **3. Configure as Variáveis de Ambiente**

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env com suas configurações
nano .env
```

### **4. Configure os Tokens GitHub (PATs)**

```bash
# .env
PAT_1=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_2=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_3=ghp_xxxxxxxxxxxxxxxxxxxx
NODE_ENV=development
PORT=3000
```

### **5. Execute o Servidor Local**

```bash
# Desenvolvimento
npm run dev

# Produção
npm start

# Preview Vercel
npm run preview

# Deploy Vercel
npm run deploy
```

---

## ⚙️ **Configuração**

### **🔑 Configurando Tokens GitHub**

1. **Acesse** [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. **Clique** em "Generate new token (classic)"
3. **Selecione** os escopos:
   - `public_repo` - Para repositórios públicos
   - `read:user` - Para informações do usuário
   - `read:org` - Para organizações (opcional)
4. **Copie** o token e adicione ao `.env`

### **🌐 Configurando Vercel**

1. **Instale** Vercel CLI:

```bash
npm i -g vercel
```

2. **Faça login**:

```bash
vercel login
```

3. **Configure** o projeto:

```bash
vercel
```

4. **Deploy**:

```bash
vercel --prod
```

---

## 🎯 **Casos de Uso**

### **👤 Perfil Pessoal**

```markdown
# 👋 Olá, eu sou [Seu Nome]

[![GitHub Stats](https://git-hub-readme-cards.vercel.app/api?username=SEU_USERNAME&show_icons=true&theme=radical)](https://github.com/SEU_USERNAME)

[![Top Languages](https://git-hub-readme-cards.vercel.app/api/top-langs/?username=SEU_USERNAME&layout=compact&theme=radical)](https://github.com/SEU_USERNAME)
```

### **💼 Portfólio Profissional**

```markdown
# 💼 Portfólio de Projetos

## 🚀 Projetos em Destaque

[![Repo Card](https://git-hub-readme-cards.vercel.app/api/pin/?username=SEU_USERNAME&repo=PROJETO_1&theme=merko)](https://github.com/SEU_USERNAME/PROJETO_1)
[![Repo Card](https://git-hub-readme-cards.vercel.app/api/pin/?username=SEU_USERNAME&repo=PROJETO_2&theme=merko)](https://github.com/SEU_USERNAME/PROJETO_2)

## 📊 Estatísticas Gerais

[![GitHub Stats](https://git-hub-readme-cards.vercel.app/api?username=SEU_USERNAME&show_icons=true&theme=merko&hide=contribs&show=reviews,discussions_started)](https://github.com/SEU_USERNAME)
```

### **📚 Documentação de Projeto**

```markdown
# 📚 Documentação

## 📊 Estatísticas do Projeto

[![GitHub Stats](https://git-hub-readme-cards.vercel.app/api?username=SEU_USERNAME&repo=PROJETO&show_icons=true&theme=dark)](https://github.com/SEU_USERNAME/PROJETO)

## 🌟 Contribuidores

[![GitHub Contributors](https://img.shields.io/github/contributors/SEU_USERNAME/PROJETO?style=for-the-badge&logo=github)](https://github.com/SEU_USERNAME/PROJETO/graphs/contributors)
```

---

## 🔧 **API Endpoints**

### **📊 Estatísticas Gerais**

```
GET /api?username=USERNAME&theme=THEME&show_icons=true
```

**Parâmetros:**

- `username` - Nome de usuário do GitHub
- `theme` - Tema do cartão
- `show_icons` - Mostrar ícones (true/false)
- `hide` - Estatísticas para ocultar
- `show` - Estatísticas extras para mostrar

### **🌟 Top Linguagens**

```
GET /api/top-langs?username=USERNAME&layout=compact&theme=THEME&langs_count=5&size_weight=40&count_weight=60
```

**Parâmetros:**

- `username` - Nome de usuário do GitHub
- `layout` - Layout (compact, normal, donut, donut-vertical, pie)
- `langs_count` - Número de linguagens (1-10)
- `size_weight` - Peso do tamanho do arquivo (0-100)
- `count_weight` - Peso da contagem de commits (0-100)
- `exclude_repo` - Repositórios para excluir
- `hide_progress` - Ocultar barras de progresso

### **📁 Repositórios**

```
GET /api/pin?username=USERNAME&repo=REPO_NAME&theme=THEME
```

**Parâmetros:**

- `username` - Nome de usuário do GitHub
- `repo` - Nome do repositório
- `show_owner` - Mostrar proprietário
- `theme` - Tema do cartão

### **⏰ WakaTime**

```
GET /api/wakatime?username=USERNAME&theme=THEME&layout=compact&langs_count=5
```

**Parâmetros:**

- `username` - Nome de usuário do WakaTime
- `theme` - Tema do cartão
- `layout` - Layout (compact, normal, donut, pie)
- `langs_count` - Número de linguagens (padrão: 2, máximo: 10)
- `display_format` - Formato de tempo (HH:mm ou decimal)
- `api_domain` - Domínio da API (para WakaTime Enterprise)

### **📝 Gists**

```
GET /api/gist?gist_id=GIST_ID&theme=THEME
```

**Parâmetros:**

- `gist_id` - ID do Gist
- `theme` - Tema do cartão

### **🔍 Status da API**

```
GET /status/up
GET /status/pat-info
```

---

## 🎨 **Temas Disponíveis**

### **🎭 Temas Clássicos**

- `default` - Tema padrão
- `dark` - Tema escuro
- `radical` - Tema radical
- `tokyonight` - Tema Tokyo Night
- `dracula` - Tema Dracula

### **🌈 Temas Coloridos**

- `merko` - Tema Merko
- `gruvbox` - Tema Gruvbox
- `cobalt` - Tema Cobalt
- `synthwave` - Tema Synthwave
- `highcontrast` - Tema Alto Contraste

### **🎪 Temas Especiais**

- `gotham` - Tema Gotham
- `material-palenight` - Material Palenight
- `green-nur` - Verde Nur
- `aqua` - Tema Aqua
- `nightowl` - Tema Night Owl

---

## 📊 **Parâmetros de Personalização por Card**

### **📊 Card de Estatísticas Gerais (`/api`)**

**Parâmetros de Cores:**

```markdown
title_color=#FF6B6B # Cor do título
text_color=#4ECDC4 # Cor do texto principal
bg_color=#2C3E50 # Cor de fundo
border_color=#E74C3C # Cor da borda
ring_color=#F39C12 # Cor do anel do rank
icon_color=#9B59B6 # Cor dos ícones
```

**Parâmetros de Layout:**

```markdown
card_width=495 # Largura do cartão (300-600)
line_height=25 # Altura da linha
border_radius=4.5 # Raio da borda
hide_border=false # Ocultar borda
hide_title=false # Ocultar título
hide_rank=false # Ocultar rank
```

**Parâmetros de Funcionalidades:**

```markdown
show_icons=true # Mostrar ícones
include_all_commits=false # Incluir todos os commits
disable_animations=false # Desabilitar animações
custom_title=Meu Perfil # Título personalizado
```

**Parâmetros de Estatísticas:**

```markdown
hide=contribs,issues # Ocultar estatísticas específicas
show=reviews,discussions_started # Mostrar estatísticas extras
exclude_repo=repo1,repo2 # Excluir repositórios
```

**Parâmetros de Formatação:**

```markdown
locale=pt_BR # Idioma (15+ idiomas suportados)
number_format=short # Formato dos números
rank_icon=percentile # Ícone do rank
cache_seconds=14400 # Tempo de cache (4h-48h)
```

### **🌟 Card de Top Linguagens (`/api/top-langs`)**

**Parâmetros de Layout:**

```markdown
layout=compact # Layout: compact, normal, donut, donut-vertical, pie
langs_count=5 # Número de linguagens (1-10)
card_width=495 # Largura do cartão
hide_progress=false # Ocultar barras de progresso
```

**Parâmetros de Peso:**

```markdown
size_weight=40 # Peso do tamanho do arquivo (0-100)
count_weight=60 # Peso da contagem de commits (0-100)
```

**Parâmetros de Cores (mesmos do card de estatísticas):**

```markdown
title_color, text_color, bg_color, theme, border_radius, border_color
```

**Parâmetros de Funcionalidades:**

```markdown
exclude_repo=repo1,repo2 # Excluir repositórios
custom_title=Minhas Linguagens
hide_title=false
hide_border=false
```

### **📁 Card de Repositório (`/api/pin`)**

**Parâmetros Específicos:**

```markdown
username=SEU_USERNAME # Nome de usuário
repo=REPO_NAME # Nome do repositório
show_owner=true # Mostrar proprietário
description_lines_count=3 # Número de linhas da descrição
```

**Parâmetros de Cores (mesmos dos outros cards):**

```markdown
title_color, icon_color, text_color, bg_color, theme
border_radius, border_color
```

**Parâmetros de Layout:**

```markdown
hide_border=false
card_width=495
```

### **⏰ Card do WakaTime (`/api/wakatime`)**

**Parâmetros Específicos:**

```markdown
username=SEU_USERNAME # Nome de usuário do WakaTime
api_domain=wakatime.com # Domínio da API (para WakaTime Enterprise)
layout=compact # Layout: compact, normal, donut, pie
langs_count=2 # Número de linguagens (padrão: 2, máximo: 10)
display_format=HH:mm # Formato de exibição do tempo
```

**⚠️ Características Especiais do WakaTime:**

- **Por padrão, mostra apenas 2 linguagens** para manter o card compacto
- **Use `langs_count=5`** para mostrar mais linguagens (1-10)
- **Layouts disponíveis:** `compact`, `normal`, `donut`, `pie`
- **Formato de tempo:** `HH:mm` (horas:minutos) ou `decimal` (horas decimais)
- **Suporte a WakaTime Enterprise** via parâmetro `api_domain`

**Parâmetros de Layout:**

```markdown
hide_progress=false # Ocultar barras de progresso
line_height=25 # Altura da linha
card_width=495 # Largura do cartão
```

**Parâmetros de Cores (mesmos dos outros cards):**

```markdown
title_color, icon_color, text_color, bg_color, theme
border_radius, border_color
```

**Parâmetros de Funcionalidades:**

```markdown
custom_title=Meu Tempo de Codificação
hide_title=false
hide_border=false
disable_animations=false
```

### **📝 Card de Gist (`/api/gist`)**

**Parâmetros Específicos:**

```markdown
gist_id=GIST_ID # ID do Gist
show_owner=true # Mostrar proprietário
```

**Parâmetros de Cores (mesmos dos outros cards):**

```markdown
title_color, icon_color, text_color, bg_color, theme
border_radius, border_color
```

**Parâmetros de Layout:**

```markdown
hide_border=false
card_width=495
```

### **🎨 Parâmetros Globais de Cores**

**Cores Personalizáveis (disponíveis em todos os cards):**

```markdown
title_color=#FF6B6B # Cor do título
text_color=#4ECDC4 # Cor do texto
bg_color=#2C3E50 # Cor de fundo
border_color=#E74C3C # Cor da borda
icon_color=#9B59B6 # Cor dos ícones
ring_color=#F39C12 # Cor do anel (apenas stats)
```

### **🌍 Idiomas Suportados**

```markdown
locale=pt_BR # Português Brasil
locale=en # Inglês
locale=es # Espanhol
locale=fr # Francês
locale=de # Alemão
locale=ja # Japonês
locale=ko # Coreano
locale=zh # Chinês
locale=ru # Russo
locale=it # Italiano
locale=pl # Polonês
locale=tr # Turco
locale=ar # Árabe
locale=hi # Hindi
locale=th # Tailandês
```

### **⚙️ Parâmetros de Cache**

```markdown
cache_seconds=14400 # Tempo de cache em segundos

# Padrões por card:

# - Estatísticas: 4-48 horas

# - Top Linguagens: 4-48 horas

# - Repositório: 1-10 dias

# - WakaTime: 6-48 horas

# - Gist: 2-6 dias
```

---

## 💡 **Dicas Rápidas de Personalização**

### **🎯 Para Cada Tipo de Card:**

#### **📊 Estatísticas Gerais:**

- **Ocultar elementos:** `hide=contribs,issues,prs`
- **Mostrar extras:** `show=reviews,discussions_started,prs_merged`
- **Personalizar rank:** `rank_icon=percentile` ou `rank_icon=grade`
- **Formato números:** `number_format=short` (1K, 1M) ou `number_format=long` (1000, 1000000)

#### **🌟 Top Linguagens:**

- **Layouts:** `compact` (padrão), `normal`, `donut`, `donut-vertical`, `pie`
- **Peso personalizado:** `size_weight=40&count_weight=60` (soma deve ser 100)
- **Excluir repositórios:** `exclude_repo=repo1,repo2,repo3`
- **Limitar linguagens:** `langs_count=3` (1-10)

#### **📁 Repositórios:**

- **Mostrar proprietário:** `show_owner=true`
- **Descrição:** `description_lines_count=4` (1-5 linhas)
- **Tema específico:** Use temas que combinem com o projeto

#### **⏰ WakaTime:**

- **⚠️ Por padrão mostra apenas 2 linguagens**
- **Para mais linguagens:** `langs_count=5`
- **Layouts:** `compact`, `normal`, `donut`, `pie`
- **Formato tempo:** `display_format=HH:mm` ou `display_format=decimal`
- **Enterprise:** `api_domain=wakatime.company.com`

#### **📝 Gists:**

- **Mostrar proprietário:** `show_owner=true`
- **ID do Gist:** Use o ID da URL do Gist
- **Temas:** Combine com o tema do seu README

### **🎨 Combinações de Cores Populares:**

```markdown
# Tema Azul Profissional

title_color=#2563EB&text_color=#1E40AF&bg_color=#F8FAFC&border_color=#3B82F6

# Tema Verde Natureza

title_color=#059669&text_color=#047857&bg_color=#F0FDF4&border_color=#10B981

# Tema Roxo Moderno

title_color=#7C3AED&text_color=#5B21B6&bg_color=#FAF5FF&border_color=#8B5CF6

# Tema Laranja Energia

title_color=#EA580C&text_color=#C2410C&bg_color=#FFF7ED&border_color=#F97316
```

---

## 🌐 **Exemplos Práticos por Tipo de Card**

### **📊 Card de Estatísticas Gerais**

#### **🎯 Exemplo Básico:**

```markdown
[![GitHub Stats](https://git-hub-readme-cards.vercel.app/api?username=MatheusRenzo&show_icons=true&theme=radical)](https://github.com/MatheusRenzo)
```

#### **🎨 Exemplo Personalizado com Cores:**

```markdown
[![GitHub Stats](https://git-hub-readme-cards.vercel.app/api?username=MatheusRenzo&show_icons=true&theme=radical&title_color=#FF6B6B&text_color=#4ECDC4&bg_color=#2C3E50&border_color=#E74C3C&ring_color=#F39C12&icon_color=#9B59B6)](https://github.com/MatheusRenzo)
```

#### **🔧 Exemplo com Estatísticas Personalizadas:**

```markdown
[![GitHub Stats](https://git-hub-readme-cards.vercel.app/api?username=MatheusRenzo&show_icons=true&theme=radical&hide=contribs,issues&show=reviews,discussions_started&custom_title=Meu Perfil GitHub)](https://github.com/MatheusRenzo)
```

### **🌟 Card de Top Linguagens**

#### **🎯 Exemplo Básico:**

```markdown
[![Top Languages](https://git-hub-readme-cards.vercel.app/api/top-langs/?username=MatheusRenzo&layout=compact&theme=merko)](https://github.com/MatheusRenzo)
```

#### **🎨 Exemplo com Layout Donut:**

```markdown
[![Top Languages](https://git-hub-readme-cards.vercel.app/api/top-langs/?username=MatheusRenzo&layout=donut&theme=tokyonight&langs_count=6&size_weight=30&count_weight=70)](https://github.com/MatheusRenzo)
```

#### **🔧 Exemplo Excluindo Repositórios:**

```markdown
[![Top Languages](https://git-hub-readme-cards.vercel.app/api/top-langs/?username=MatheusRenzo&layout=compact&theme=dark&exclude_repo=old-project,test-repo)](https://github.com/MatheusRenzo)
```

### **📁 Card de Repositório**

#### **🎯 Exemplo Básico:**

```markdown
[![Repo Card](https://git-hub-readme-cards.vercel.app/api/pin/?username=MatheusRenzo&repo=GitHub-Readme-Cards&theme=tokyonight)](https://github.com/MatheusRenzo/GitHub-Readme-Cards)
```

#### **🎨 Exemplo Personalizado:**

```markdown
[![Repo Card](https://git-hub-readme-cards.vercel.app/api/pin/?username=MatheusRenzo&repo=GitHub-Readme-Cards&theme=radical&show_owner=true&description_lines_count=4&title_color=#FF6B6B&bg_color=#2C3E50)](https://github.com/MatheusRenzo/GitHub-Readme-Cards)
```

### **⏰ Card do WakaTime**

#### **🎯 Exemplo Básico (2 linguagens padrão):**

```markdown
[![WakaTime](https://git-hub-readme-cards.vercel.app/api/wakatime?username=matheusrenzogamaDEV&theme=radical)](https://wakatime.com/@matheusrenzogamaDEV)
```

#### **🎨 Exemplo com 5 Linguagens:**

```markdown
[![WakaTime](https://git-hub-readme-cards.vercel.app/api/wakatime?username=matheusrenzogamaDEV&theme=radical&langs_count=5&layout=donut&display_format=HH:mm)](https://wakatime.com/@matheusrenzogamaDEV)
```

#### **🔧 Exemplo Layout Compacto:**

```markdown
[![WakaTime](https://git-hub-readme-cards.vercel.app/api/wakatime?username=matheusrenzogamaDEV&theme=merko&layout=compact&hide_progress=false&custom_title=Meu Tempo de Codificação)](https://wakatime.com/@matheusrenzogamaDEV)
```

### **📝 Card de Gist**

#### **🎯 Exemplo Básico:**

```markdown
[![Gist](https://git-hub-readme-cards.vercel.app/api/gist?gist_id=1234567890abcdef&theme=dark)](https://gist.github.com/1234567890abcdef)
```

#### **🎨 Exemplo Personalizado:**

```markdown
[![Gist](https://git-hub-readme-cards.vercel.app/api/gist?gist_id=1234567890abcdef&theme=radical&show_owner=true&title_color=#FF6B6B&bg_color=#2C3E50)](https://gist.github.com/1234567890abcdef)
```

### **🎨 Exemplo de Card Completamente Personalizado**

```markdown
[![GitHub Stats](https://git-hub-readme-cards.vercel.app/api?username=MatheusRenzo&show_icons=true&theme=radical&hide=contribs,issues&show=reviews,discussions_started&title_color=#FF6B6B&text_color=#4ECDC4&bg_color=#2C3E50&border_color=#E74C3C&ring_color=#F39C12&icon_color=#9B59B6&card_width=500&line_height=30&border_radius=8&locale=pt_BR&custom_title=Meu Perfil GitHub)](https://github.com/MatheusRenzo)
```

---

## 🔍 **Troubleshooting**

### **❌ Problemas Comuns**

#### **1. Cartão não aparece**

- ✅ Verifique se o username está correto
- ✅ Confirme se o usuário tem repositórios públicos
- ✅ Teste a URL da API diretamente no navegador

#### **2. Erro de Rate Limit**

- ✅ Configure tokens GitHub (PAT_1, PAT_2, etc.)
- ✅ Use cache para reduzir requisições
- ✅ Faça deploy próprio para evitar limites

#### **3. Cores não aplicam**

- ✅ Use códigos hex válidos (#FFFFFF)
- ✅ Verifique se o tema existe
- ✅ Teste com cores simples primeiro

#### **4. Layout quebrado**

- ✅ Use layouts suportados (compact, donut, pie)
- ✅ Verifique se todos os parâmetros são válidos
- ✅ Teste em diferentes dispositivos

### **🔧 Soluções**

#### **Rate Limit Excedido**

```bash
# Configure múltiplos tokens
PAT_1=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_2=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_3=ghp_xxxxxxxxxxxxxxxxxxxx
```

#### **Cache não funcionando**

```bash
# Ajuste o tempo de cache
CACHE_SECONDS=14400  # 4 horas
```

#### **Performance lenta**

```bash
# Configure timeout
REQUEST_TIMEOUT=30000  # 30 segundos
```

---

## 🤝 **Contribuindo**

### **📝 Como Contribuir**

1. **Fork** o repositório
2. **Clone** localmente
3. **Crie** uma branch para sua feature
4. **Faça** suas alterações
5. **Teste** localmente
6. **Commit** suas mudanças
7. **Push** para sua branch
8. **Abra** um Pull Request

### **🎯 Diretrizes**

- 📝 **Documente** suas mudanças
- 🧪 **Adicione testes** para novas funcionalidades
- 🎨 **Mantenha** o estilo do código
- 📚 **Atualize** a documentação
- 🔍 **Teste** em diferentes ambientes

### **🏗️ Estrutura do Projeto**

```
GitHub-Readme-Cards/
├── api/                    # Endpoints da API
│   ├── index.js           # Cartão de estatísticas
│   ├── pin.js             # Cartão de repositório
│   ├── top-langs.js       # Cartão de linguagens
│   ├── wakatime.js        # Cartão do WakaTime
│   ├── gist.js            # Cartão de Gist
│   └── status/            # Rotas de status
│       ├── up.js          # Status dos PATs
│       └── pat-info.js    # Info dos PATs
├── src/                    # Código fonte
│   ├── cards/             # Lógica dos cartões
│   ├── common/            # Utilitários comuns
│   └── fetchers/          # Buscadores de dados
├── themes/                 # Temas disponíveis
├── local-server.js        # Servidor Express local
└── package.json           # Dependências
```

---

## 📈 **Roadmap**

### **🚀 Versão Atual (1.0.0)**

- ✅ Cartões de estatísticas básicos
- ✅ Temas personalizáveis
- ✅ Cartões de linguagens
- ✅ Cartões de repositório
- ✅ Integração WakaTime
- ✅ Rotas de status da API
- ✅ Documentação completa
- ✅ Deploy personalizado em Vercel

### **🔄 Próximas Versões**

- 🔄 **Temas dinâmicos** baseados no horário
- 🔄 **Mais integrações** (GitLab, Bitbucket)
- 🔄 **Analytics** e métricas de uso
- 🔄 **Templates** pré-definidos
- 🔄 **API GraphQL** para consultas avançadas
- 🔄 **Webhooks** para atualizações em tempo real

---

## 📄 **Licença**

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🙏 **Agradecimentos**

- **Comunidade GitHub** - Por todas as contribuições
- **Contribuidores** - Que ajudaram a evoluir o projeto
- **Usuários** - Que usam e testam a ferramenta

---

## 📞 **Suporte**

### **❓ Precisa de ajuda?**

- 🐛 **Reporte bugs** - [GitHub Issues](https://github.com/MatheusRenzo/GitHub-Readme-Cards/issues)
- 💡 **Sugira features** - [GitHub Discussions](https://github.com/MatheusRenzo/GitHub-Readme-Cards/discussions)
- 📚 **Documentação** - [Wiki do Projeto](https://github.com/MatheusRenzo/GitHub-Readme-Cards/wiki)
- 💬 **Chat** - [GitHub Discussions](https://github.com/MatheusRenzo/GitHub-Readme-Cards/discussions)

### **🌐 Conecte-se**

- 🌐 **Website:** [git-hub-readme-cards.vercel.app](https://git-hub-readme-cards.vercel.app)
- 🐦 **Twitter:** [@MatheusRenzo](https://twitter.com/MatheusRenzo)
- 💼 **LinkedIn:** [MatheusRenzo](https://linkedin.com/in/matheusrenzo)
- 📧 **Email:** contato@matheusrenzo.dev
- ⏰ **WakaTime:** [matheusrenzogamaDEV](https://wakatime.com/@matheusrenzogamaDEV)

---

## ⭐ **Avalie o Projeto**

**Se este projeto te ajudou, considere dar uma estrela no GitHub!**

[![GitHub Stars](https://img.shields.io/github/stars/MatheusRenzo/GitHub-Readme-Cards?style=social&logo=github)](https://github.com/MatheusRenzo/GitHub-Readme-Cards/stargazers)

---

**Feito com ❤️ e ☕ por [MatheusRenzo](https://github.com/MatheusRenzo)**

[![GitHub Followers](https://img.shields.io/github/followers/MatheusRenzo?style=social&logo=github)](https://github.com/MatheusRenzo?tab=followers)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/MatheusRenzo?style=social&logo=github)](https://github.com/sponsors/MatheusRenzo)
