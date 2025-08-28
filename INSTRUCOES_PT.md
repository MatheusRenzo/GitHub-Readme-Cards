# 📚 **Guia Completo - GitHub Readme Cards**

> **Transforme seu perfil GitHub em algo extraordinário!** 🚀

---

## 🎯 **Índice Rápido**

- [🚀 **O que é o GitHub Readme Cards?**](#-o-que-é-o-github-readme-cards)
- [✨ **Funcionalidades Principais**](#-funcionalidades-principais)
- [🛠️ **Instalação e Configuração**](#️-instalação-e-configuração)
- [🎨 **Personalização e Temas**](#-personalização-e-temas)
- [📱 **Exemplos Práticos**](#-exemplos-práticos)
- [🔧 **Deploy Próprio**](#-deploy-próprio)
- [🚨 **Troubleshooting**](#-troubleshooting)
- [📚 **Referência da API**](#-referência-da-api)

---

## 🚀 **O que é o GitHub Readme Cards?**

**GitHub Readme Cards** é uma ferramenta revolucionária que transforma dados estáticos do GitHub em cartões visuais dinâmicos e impressionantes. Em vez de apenas números e texto, você terá:

### 🌟 **Benefícios Principais**

- 🎨 **Visual Atraente** - Cartões com design moderno e profissional
- 📊 **Dados em Tempo Real** - Estatísticas sempre atualizadas
- 🌈 **Personalização Total** - Temas, cores e layouts únicos
- 📱 **Responsivo** - Funciona perfeitamente em qualquer dispositivo
- ⚡ **Performance Otimizada** - Cache inteligente e rápido
- 🔄 **Atualizações Automáticas** - Sempre sincronizado com o GitHub

### 💡 **Casos de Uso**

- **Perfis Pessoais** - Destaque suas conquistas
- **Portfólios Profissionais** - Mostre seus projetos
- **Documentação de Projetos** - Exiba estatísticas importantes
- **READMEs de Repositórios** - Torne-os mais atrativos
- **Apresentações** - Use em slides e demonstrações

---

## ✨ **Funcionalidades Principais**

### 🎯 **1. Cartão de Estatísticas GitHub**

O cartão mais popular que exibe suas principais métricas do GitHub:

```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME&show_icons=true&theme=radical)
```

**📊 O que mostra:**
- ⭐ **Total de estrelas** recebidas em seus projetos
- 🍴 **Total de forks** dos seus repositórios
- 📝 **Total de commits** realizados
- 🐛 **Issues abertas e fechadas**
- 🔄 **Pull requests** criados e aceitos
- 📈 **Rank global** baseado na sua atividade
- 👥 **Contribuições** para outros projetos

**🎨 Opções de personalização:**
- `show_icons=true` - Mostra ícones para cada estatística
- `theme=radical` - Aplica tema específico
- `hide=contribs,issues` - Oculta estatísticas específicas
- `show=reviews,discussions` - Mostra estatísticas extras

### 📌 **2. Cartão de Repositório em Destaque**

Destaque um repositório específico com estatísticas detalhadas:

```markdown
![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=SEU_USERNAME&repo=REPO_NAME&theme=merko)
```

**📋 Informações exibidas:**
- 📁 **Nome e descrição** do repositório
- 🌟 **Estrelas e forks** atuais
- 💻 **Linguagem principal** utilizada
- 📅 **Data da última atualização**
- 👤 **Proprietário** do repositório
- 📊 **Tamanho** do repositório

**🔧 Parâmetros úteis:**
- `show_owner=true` - Mostra o nome do proprietário
- `theme=merko` - Aplica tema específico
- `hide_border=true` - Remove a borda

### 🗣️ **3. Cartão de Principais Linguagens**

Visualize suas linguagens de programação mais utilizadas:

```markdown
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=SEU_USERNAME&layout=compact&theme=radical)
```

**📐 Layouts disponíveis:**

| Layout | Código | Visual |
|--------|--------|--------|
| **Compacto** | `layout=compact` | Lista simples e direta |
| **Donut** | `layout=donut` | Gráfico circular elegante |
| **Donut Vertical** | `layout=donut-vertical` | Versão vertical do donut |
| **Pizza** | `layout=pie` | Gráfico de pizza tradicional |
| **Padrão** | `layout=default` | Layout original com barras |

**⚙️ Opções avançadas:**
- `langs_count=8` - Mostra apenas 8 linguagens
- `exclude_repo=repo1,repo2` - Exclui repositórios específicos
- `hide=javascript,html` - Oculta linguagens específicas
- `size_weight=0.5&count_weight=0.5` - Ajusta pesos do algoritmo

### ⏰ **4. Cartão de Estatísticas WakaTime**

Integre suas estatísticas de tempo de desenvolvimento:

```markdown
![WakaTime Stats](https://github-readme-stats.vercel.app/api/wakatime?username=SEU_USERNAME&theme=dark)
```

**⏱️ Dados exibidos:**
- ⏱️ **Tempo total** de desenvolvimento
- 📅 **Atividade diária** e semanal
- 💻 **Linguagens** mais utilizadas
- 🛠️ **Editores** preferidos
- 🌍 **Sistemas operacionais** utilizados
- 📊 **Gráficos** de atividade

**🔗 Pré-requisitos:**
- Perfil WakaTime público
- Username correto configurado

### 📝 **5. Cartão de Gist**

Destaque um gist específico com informações detalhadas:

```markdown
![Gist Card](https://github-readme-stats.vercel.app/api/gist?gist_id=GIST_ID&theme=gruvbox)
```

**📋 Informações exibidas:**
- 📝 **Nome e descrição** do gist
- 💻 **Linguagem** principal
- 📅 **Data de criação** e última atualização
- 👤 **Proprietário** do gist
- 📊 **Tamanho** do arquivo

---

## 🎨 **Personalização e Temas**

### 🌈 **Temas Integrados**

O projeto inclui **40+ temas** pré-definidos para todos os gostos:

#### **🎨 Temas Clássicos**
- `default` - Tema padrão limpo
- `dark` - Tema escuro elegante
- `light` - Tema claro minimalista
- `radical` - Tema vibrante e moderno
- `merko` - Tema verde profissional

#### **🌟 Temas Especiais**
- `tokyonight` - Tema noturno de Tóquio
- `gruvbox` - Tema inspirado no Vim
- `dracula` - Tema baseado no Dracula
- `cobalt` - Tema azul cobalto
- `synthwave` - Tema retrô dos anos 80

#### **🎭 Temas Únicos**
- `one_dark` - Tema do Atom editor
- `github_dark` - Tema escuro do GitHub
- `github_dark_dimmed` - Tema escuro suave
- `github_light` - Tema claro do GitHub
- `github_light_colorblind` - Tema acessível

### 🎨 **Personalização Avançada**

#### **🎨 Cores Personalizadas**
Crie temas únicos com suas cores favoritas:

```markdown
![Custom Card](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&icon_color=fff)
```

**🎨 Parâmetros de cor:**
- `bg_color` - Cor de fundo (hex, rgb, gradiente)
- `title_color` - Cor do título principal
- `text_color` - Cor do texto secundário
- `icon_color` - Cor dos ícones
- `border_color` - Cor da borda
- `ring_color` - Cor do anel de rank

#### **🌈 Gradientes**
Crie fundos com gradientes impressionantes:

```markdown
# Gradiente azul para roxo
bg_color=0D1117,1F2937,4C1D95

# Gradiente verde para azul
bg_color=10B981,3B82F6,1E40AF

# Gradiente rosa para laranja
bg_color=EC4899,F97316,EA580C
```

#### **🔧 Configurações de Layout**
- `hide_border=true` - Remove a borda
- `border_radius=10` - Bordas arredondadas
- `card_width=500` - Largura personalizada
- `hide_rank=true` - Oculta o rank
- `rank_icon=github` - Ícone personalizado para o rank

---

## 🛠️ **Instalação e Configuração**

### 📋 **Requisitos do Sistema**

- **Node.js** 22.18.0 ou superior
- **npm** 9.0.0+ ou **yarn** 1.22.0+
- **Git** 2.30.0+
- **Memória RAM** mínimo 512MB
- **Espaço em disco** mínimo 100MB

### 🚀 **Instalação Local**

#### **Passo 1: Clone o Repositório**
```bash
# Clone o repositório
git clone https://github.com/MatheusRenzo/GitHub-Readme-Cards.git

# Entre na pasta do projeto
cd GitHub-Readme-Cards

# Verifique se está na pasta correta
ls -la
```

#### **Passo 2: Instale as Dependências**
```bash
# Instale todas as dependências
npm install

# Ou se preferir yarn
yarn install

# Verifique se não há erros
npm run test
```

#### **Passo 3: Configure as Variáveis de Ambiente**
```bash
# Crie o arquivo de configuração
cp .env.example .env

# Edite o arquivo com suas configurações
nano .env
# ou
code .env
```

**📝 Conteúdo do arquivo .env:**
```env
# GitHub Personal Access Tokens (obrigatório para funcionalidade completa)
PAT_1=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_2=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_3=ghp_xxxxxxxxxxxxxxxxxxxx

# Configurações do servidor
PORT=9000
NODE_ENV=development

# Configurações de cache
CACHE_SECONDS=14400
REQUEST_TIMEOUT=30000

# Configurações de rate limiting
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### **Passo 4: Configure os Tokens GitHub**

**🔑 Como obter Personal Access Tokens:**

1. **Acesse GitHub.com** e faça login
2. **Vá em Settings** → Developer settings
3. **Clique em Personal access tokens** → Tokens (classic)
4. **Generate new token** → Generate new token (classic)
5. **Configure as permissões:**
   - ✅ `repo` - Acesso completo aos repositórios
   - ✅ `read:user` - Ler informações do usuário
   - ✅ `read:org` - Ler informações das organizações
6. **Clique em Generate token**
7. **Copie o token** e cole no arquivo .env

**⚠️ Importante:**
- Guarde o token em local seguro
- Nunca compartilhe o token
- Configure múltiplos tokens para evitar rate limits
- Tokens expiram em 90 dias (configure lembretes)

#### **Passo 5: Inicie o Servidor**
```bash
# Inicie em modo desenvolvimento
npm run dev

# Ou em modo produção
npm start

# Verifique se está funcionando
curl http://localhost:9000/api
```

#### **Passo 6: Teste as Funcionalidades**
```bash
# Teste o cartão de estatísticas
curl "http://localhost:9000/?username=SEU_USERNAME"

# Teste o cartão de linguagens
curl "http://localhost:9000/top-langs?username=SEU_USERNAME"

# Teste a rota de status
curl "http://localhost:9000/status/up"
```

### 🔧 **Configurações Avançadas**

#### **📊 Otimização de Performance**
```env
# Cache mais agressivo para produção
CACHE_SECONDS=86400  # 24 horas

# Timeout menor para respostas mais rápidas
REQUEST_TIMEOUT=15000  # 15 segundos

# Rate limiting mais restritivo
RATE_LIMIT_MAX_REQUESTS=50
```

#### **🔒 Configurações de Segurança**
```env
# Desabilita logs sensíveis em produção
LOG_LEVEL=error

# Habilita HTTPS (se configurado)
FORCE_HTTPS=true

# Headers de segurança
SECURITY_HEADERS=true
```

---

## 📱 **Exemplos Práticos**

### 🎯 **Perfil Pessoal Simples**

```markdown
# 👋 Olá, eu sou [Seu Nome]

Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras.

[![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME&show_icons=true&theme=radical)](https://github.com/SEU_USERNAME)

[![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=SEU_USERNAME&layout=compact&theme=radical)](https://github.com/SEU_USERNAME)
```

### 💼 **Portfólio Profissional**

```markdown
# 💼 Portfólio de Projetos

## 🚀 Projetos em Destaque

[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=SEU_USERNAME&repo=PROJETO_1&theme=merko)](https://github.com/SEU_USERNAME/PROJETO_1)
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=SEU_USERNAME&repo=PROJETO_2&theme=merko)](https://github.com/SEU_USERNAME/PROJETO_2)

## 📊 Estatísticas Gerais

[![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME&show_icons=true&theme=merko&hide=contribs&show=reviews,discussions_started)](https://github.com/SEU_USERNAME)

## 💻 Linguagens Favoritas

[![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=SEU_USERNAME&layout=donut&theme=merko)](https://github.com/SEU_USERNAME)
```

### 📚 **Documentação de Projeto**

```markdown
# 📚 Nome do Projeto

Descrição detalhada do projeto...

## 📊 Estatísticas do Projeto

[![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME&repo=PROJETO&show_icons=true&theme=dark)](https://github.com/SEU_USERNAME/PROJETO)

## 🌟 Contribuidores

[![GitHub Contributors](https://img.shields.io/github/contributors/SEU_USERNAME/PROJETO?style=for-the-badge&logo=github)](https://github.com/SEU_USERNAME/PROJETO/graphs/contributors)

## 📈 Linguagens Utilizadas

[![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=SEU_USERNAME&repo=PROJETO&layout=compact&theme=dark)](https://github.com/SEU_USERNAME/PROJETO)
```

### 🎨 **Perfil com Temas Dinâmicos**

```markdown
# 🎨 [Seu Nome] - Desenvolvedor

## 📊 Estatísticas GitHub

<!-- Tema escuro para modo escuro -->
[![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME&show_icons=true&theme=dark#gh-dark-mode-only)](https://github.com/SEU_USERNAME)

<!-- Tema claro para modo claro -->
[![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME&show_icons=true&theme=default#gh-light-mode-only)](https://github.com/SEU_USERNAME)

## 🌟 Linguagens Favoritas

<!-- Tema escuro para modo escuro -->
[![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=SEU_USERNAME&layout=donut&theme=dark#gh-dark-mode-only)](https://github.com/SEU_USERNAME)

<!-- Tema claro para modo claro -->
[![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=SEU_USERNAME&layout=donut&theme=default#gh-light-mode-only)](https://github.com/SEU_USERNAME)
```

---

## 🔧 **Deploy Próprio**

### 🚀 **Por que fazer deploy próprio?**

- 🚀 **Performance superior** - Sem limites de rate limit
- 🔒 **Privacidade** - Seus dados ficam em seu servidor
- 🎨 **Personalização total** - Modifique como quiser
- 📊 **Estatísticas** - Monitore o uso da sua API
- 💰 **Custo zero** - Muitas plataformas oferecem planos gratuitos

### ☁️ **Deploy no Vercel (Recomendado)**

#### **Passo 1: Fork do Repositório**
1. Acesse [github.com/MatheusRenzo/GitHub-Readme-Cards](https://github.com/MatheusRenzo/GitHub-Readme-Cards)
2. Clique em **"Fork"** no canto superior direito
3. Escolha sua conta para fazer o fork

#### **Passo 2: Clone Local**
```bash
# Clone seu fork
git clone https://github.com/SEU_USERNAME/GitHub-Readme-Cards.git

# Entre na pasta
cd GitHub-Readme-Cards

# Adicione o repositório original como upstream
git remote add upstream https://github.com/MatheusRenzo/GitHub-Readme-Cards.git
```

#### **Passo 3: Configure o Vercel**
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"New Project"**
4. Importe o repositório forkado
5. Configure as variáveis de ambiente

#### **Passo 4: Variáveis de Ambiente no Vercel**
```env
# GitHub Personal Access Tokens
PAT_1=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_2=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_3=ghp_xxxxxxxxxxxxxxxxxxxx

# Configurações opcionais
CACHE_SECONDS=14400
REQUEST_TIMEOUT=30000
NODE_ENV=production
```

#### **Passo 5: Deploy Automático**
- A cada push para `main`, o Vercel fará deploy automático
- Sua API estará disponível em: `https://SEU_PROJETO.vercel.app`
- Configure domínio personalizado se desejar

### 🚂 **Deploy no Railway**

#### **Passo 1: Conectar Railway**
1. Acesse [railway.app](https://railway.app)
2. Faça login com sua conta GitHub
3. Clique em **"New Project"**
4. Selecione **"Deploy from GitHub repo"**

#### **Passo 2: Configurar**
```bash
# Railway detectará automaticamente que é um projeto Node.js
# Configure as variáveis de ambiente na interface web
```

#### **Passo 3: Variáveis de Ambiente**
```env
PAT_1=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_2=ghp_xxxxxxxxxxxxxxxxxxxx
NODE_ENV=production
PORT=3000
```

### 🎨 **Deploy no Render**

#### **Passo 1: Conectar Render**
1. Acesse [render.com](https://render.com)
2. Faça login com sua conta GitHub
3. Clique em **"New +"**
4. Selecione **"Web Service"**

#### **Passo 2: Configuração**
```yaml
# render.yaml
services:
  - type: web
    name: github-readme-cards
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PAT_1
        sync: false
      - key: PAT_2
        sync: false
```

### 🐳 **Deploy com Docker**

#### **Passo 1: Dockerfile**
```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 9000

CMD ["npm", "start"]
```

#### **Passo 2: Docker Compose**
```yaml
# docker-compose.yml
version: '3.8'
services:
  github-readme-cards:
    build: .
    ports:
      - "9000:9000"
    environment:
      - NODE_ENV=production
      - PAT_1=${PAT_1}
      - PAT_2=${PAT_2}
    restart: unless-stopped
```

#### **Passo 3: Deploy**
```bash
# Construa a imagem
docker build -t github-readme-cards .

# Execute o container
docker run -d -p 9000:9000 --env-file .env github-readme-cards
```

---

## 🚨 **Troubleshooting**

### ❌ **Problemas Comuns**

#### **1. Cartão não aparece**
**🔍 Sintomas:**
- Imagem não carrega
- Erro 404 ou 500
- Cartão em branco

**✅ Soluções:**
```bash
# Verifique se o username está correto
curl "https://github-readme-stats.vercel.app/api?username=SEU_USERNAME"

# Confirme se o usuário tem repositórios públicos
# Teste a URL da API diretamente no navegador

# Verifique se não há erros no console
npm run test
```

#### **2. Erro de Rate Limit**
**🔍 Sintomas:**
- Erro "API rate limit exceeded"
- Cartões não atualizam
- Respostas lentas

**✅ Soluções:**
```bash
# Configure múltiplos tokens
PAT_1=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_2=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_3=ghp_xxxxxxxxxxxxxxxxxxxx

# Use cache para reduzir requisições
CACHE_SECONDS=14400

# Faça deploy próprio para evitar limites
```

#### **3. Cores não aplicam**
**🔍 Sintomas:**
- Cores padrão sempre aparecem
- Gradientes não funcionam
- Temas não mudam

**✅ Soluções:**
```bash
# Use códigos hex válidos
bg_color=#1F2937

# Verifique se o tema existe
theme=radical

# Teste com cores simples primeiro
bg_color=ff0000
```

#### **4. Layout quebrado**
**🔍 Sintomas:**
- Cartão com visual estranho
- Elementos sobrepostos
- Responsividade quebrada

**✅ Soluções:**
```bash
# Use layouts suportados
layout=compact
layout=donut
layout=pie

# Verifique se todos os parâmetros são válidos
# Teste em diferentes dispositivos
```

### 🔧 **Soluções Avançadas**

#### **Rate Limit Excedido**
```bash
# Configure múltiplos tokens com rotação automática
PAT_1=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_2=ghp_xxxxxxxxxxxxxxxxxxxx
PAT_3=ghp_xxxxxxxxxxxxxxxxxxxx

# Ajuste o tempo de cache
CACHE_SECONDS=14400  # 4 horas

# Configure retry automático
RETRY_ATTEMPTS=3
RETRY_DELAY=1000
```

#### **Cache não funcionando**
```bash
# Verifique as configurações de cache
CACHE_SECONDS=14400
CACHE_TYPE=memory

# Limpe o cache manualmente
npm run cache:clear

# Verifique logs do servidor
npm run logs
```

#### **Performance lenta**
```bash
# Configure timeout menor
REQUEST_TIMEOUT=15000  # 15 segundos

# Otimize as consultas GraphQL
# Use cache mais agressivo
CACHE_SECONDS=86400  # 24 horas

# Configure rate limiting
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 📊 **Monitoramento e Logs**

#### **Habilite Logs Detalhados**
```env
# Configurações de log
LOG_LEVEL=debug
LOG_FORMAT=json
LOG_FILE=logs/app.log

# Logs de performance
PERFORMANCE_LOGGING=true
SLOW_QUERY_THRESHOLD=1000
```

#### **Monitore Métricas**
```bash
# Verifique uso de memória
npm run monitor:memory

# Verifique uso de CPU
npm run monitor:cpu

# Verifique estatísticas de cache
npm run monitor:cache
```

---

## 📚 **Referência da API**

### 🌐 **Endpoints Principais**

| Endpoint | Método | Descrição | Parâmetros |
|----------|--------|-----------|------------|
| `/` | GET | Cartão de estatísticas | `username`, `theme`, `show_icons` |
| `/pin` | GET | Cartão de repositório | `repo`, `theme`, `show_owner` |
| `/top-langs` | GET | Cartão de linguagens | `username`, `layout`, `theme` |
| `/wakatime` | GET | Cartão do WakaTime | `username`, `theme` |
| `/gist` | GET | Cartão de Gist | `gist_id`, `theme` |

### 🔧 **Endpoints de Status**

| Endpoint | Método | Descrição | Parâmetros |
|----------|--------|-----------|------------|
| `/api` | GET | Informações da API | Nenhum |
| `/status/up` | GET | Status dos PATs | `type` |
| `/status/pat-info` | GET | Info detalhada dos PATs | Nenhum |

### 📝 **Parâmetros Comuns**

#### **Para Estatísticas (`/`)**
```bash
# Parâmetros básicos
username=MatheusRenzo          # Nome de usuário (obrigatório)
show_icons=true                # Mostrar ícones
theme=radical                  # Tema do cartão
hide_border=true               # Ocultar borda

# Ocultar estatísticas
hide=contribs,issues,prs      # Lista separada por vírgulas

# Mostrar estatísticas extras
show=reviews,discussions_started,discussions_answered,prs_merged

# Personalização de cores
bg_color=30,e96443,904e95     # Gradiente de cores
title_color=fff               # Cor do título
text_color=fff                # Cor do texto
icon_color=fff                # Cor dos ícones
```

#### **Para Linguagens (`/top-langs`)**
```bash
# Parâmetros básicos
username=MatheusRenzo          # Nome de usuário (obrigatório)
layout=compact                 # Layout do cartão
theme=radical                  # Tema do cartão

# Configurações de exibição
langs_count=8                  # Número de linguagens
exclude_repo=repo1,repo2      # Repositórios para excluir
hide=javascript,html          # Linguagens para ocultar

# Algoritmo de cálculo
size_weight=0.5                # Peso do tamanho (0-1)
count_weight=0.5               # Peso da contagem (0-1)

# Personalização visual
hide_progress=true             # Ocultar barras de progresso
card_width=500                 # Largura personalizada
```

#### **Para Repositórios (`/pin`)**
```bash
# Parâmetros básicos
repo=MatheusRenzo/GitHub-Readme-Cards  # Repositório (obrigatório)
theme=merko                    # Tema do cartão

# Configurações de exibição
show_owner=true                # Mostrar proprietário
hide_border=true               # Ocultar borda

# Personalização
bg_color=0D1117               # Cor de fundo
title_color=58A6FF            # Cor do título
text_color=8B949E             # Cor do texto
```

### 🔄 **Respostas da API**

#### **Formato de Resposta**
```json
{
  "message": "GitHub Readme Cards API",
  "version": "1.0.0",
  "description": "API para gerar cartões bonitos do GitHub para README",
  "endpoints": {
    "/": "Cartão de estatísticas do GitHub",
    "/pin": "Cartão de repositório",
    "/top-langs": "Cartão de linguagens mais usadas",
    "/wakatime": "Cartão do WakaTime",
    "/gist": "Cartão de Gist",
    "/status/up": "Verificar status dos PATs (up/down)",
    "/status/pat-info": "Informações detalhadas sobre os PATs",
    "/api": "Informações da API (esta rota)"
  },
  "usage": {
    "stats": "GET /?username=SEU_USERNAME",
    "pin": "GET /pin?repo=USUARIO/REPOSITORIO",
    "topLangs": "GET /top-langs?username=SEU_USERNAME",
    "wakatime": "GET /wakatime?username=SEU_USERNAME",
    "gist": "GET /gist?gist_id=ID_DO_GIST",
    "statusUp": "GET /status/up?type=shields|json|boolean",
    "patInfo": "GET /status/pat-info"
  }
}
```

#### **Códigos de Status HTTP**
- `200 OK` - Requisição bem-sucedida
- `400 Bad Request` - Parâmetros inválidos
- `404 Not Found` - Usuário ou repositório não encontrado
- `429 Too Many Requests` - Rate limit excedido
- `500 Internal Server Error` - Erro interno do servidor

---

## 🎯 **Conclusão**

**GitHub Readme Cards** é uma ferramenta poderosa que transforma perfis GitHub comuns em algo extraordinário. Com suas funcionalidades avançadas, temas personalizáveis e performance otimizada, você pode criar cartões visuais impressionantes que destacam suas conquistas e projetos.

### 🚀 **Próximos Passos**

1. **Configure localmente** para testar todas as funcionalidades
2. **Personalize** com seus temas e cores favoritos
3. **Faça deploy próprio** para ter controle total
4. **Compartilhe** com a comunidade
5. **Contribua** com melhorias e novos temas

### 💡 **Dicas Finais**

- 🎨 **Experimente** diferentes temas e combinações
- 📱 **Teste** em diferentes dispositivos
- 🔧 **Configure** múltiplos tokens para evitar rate limits
- 📊 **Monitore** o uso e performance
- 🌟 **Seja criativo** com suas personalizações

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub! ⭐**

[![GitHub Stars](https://img.shields.io/github/stars/MatheusRenzo/GitHub-Readme-Cards?style=for-the-badge&logo=github&color=gold)](https://github.com/MatheusRenzo/GitHub-Readme-Cards/stargazers)

**Feito com ❤️ e ☕ por [MatheusRenzo](https://github.com/MatheusRenzo)**

[![GitHub Followers](https://img.shields.io/github/followers/MatheusRenzo?style=for-the-badge&logo=github&color=blue)](https://github.com/MatheusRenzo)

</div>
