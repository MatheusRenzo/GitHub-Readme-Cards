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
- [📊 Parâmetros de Personalização](#-parâmetros-de-personalização)
- [🌐 Exemplos Práticos](#-exemplos-práticos)
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
GET /api/top-langs?username=USERNAME&layout=compact&theme=THEME
```

**Parâmetros:**

- `username` - Nome de usuário do GitHub
- `layout` - Layout (compact, donut, pie)
- `langs_count` - Número de linguagens
- `exclude_repo` - Repositórios para excluir

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
GET /api/wakatime?username=USERNAME&theme=THEME
```

**Parâmetros:**

- `username` - Nome de usuário do WakaTime
- `theme` - Tema do cartão
- `layout` - Layout do cartão

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

## 📊 **Parâmetros de Personalização**

### **🎨 Cores**

```markdown
# Cores personalizáveis

title_color=#FF6B6B
text_color=#4ECDC4
bg_color=#2C3E50
border_color=#E74C3C
ring_color=#F39C12
icon_color=#9B59B6
```

### **📱 Layout**

```markdown
# Configurações de layout

card_width=495
line_height=25
border_radius=4.5
hide_border=false
```

### **🔧 Funcionalidades**

```markdown
# Funcionalidades

show_icons=true
hide_title=false
hide_rank=false
disable_animations=false
include_all_commits=false
```

### **🌍 Idioma**

```markdown
# Idiomas suportados

locale=pt_BR # Português Brasil
locale=en # Inglês
locale=es # Espanhol
locale=fr # Francês
locale=de # Alemão
locale=ja # Japonês
locale=ko # Coreano
locale=zh # Chinês
```

---

## 🌐 **Exemplos Práticos**

### **🎯 Exemplo 1: Cartão Básico**

```markdown
[![GitHub Stats](https://git-hub-readme-cards.vercel.app/api?username=MatheusRenzo&show_icons=true&theme=radical)](https://github.com/MatheusRenzo)
```

### **🌟 Exemplo 2: Top Linguagens Compacto**

```markdown
[![Top Languages](https://git-hub-readme-cards.vercel.app/api/top-langs/?username=MatheusRenzo&layout=compact&theme=merko)](https://github.com/MatheusRenzo)
```

### **📁 Exemplo 3: Repositório Específico**

```markdown
[![Repo Card](https://git-hub-readme-cards.vercel.app/api/pin/?username=MatheusRenzo&repo=GitHub-Readme-Cards&theme=tokyonight)](https://github.com/MatheusRenzo/GitHub-Readme-Cards)
```

### **⏰ Exemplo 4: WakaTime**

```markdown
[![WakaTime](https://git-hub-readme-cards.vercel.app/api/wakatime?username=matheusrenzogamaDEV&theme=radical)](https://wakatime.com/@matheusrenzogamaDEV)
```

### **🎨 Exemplo 5: Cartão Personalizado**

```markdown
[![GitHub Stats](https://git-hub-readme-cards.vercel.app/api?username=MatheusRenzo&show_icons=true&theme=radical&hide=contribs,issues&show=reviews,discussions_started&title_color=#FF6B6B&text_color=#4ECDC4&bg_color=#2C3E50&border_color=#E74C3C&ring_color=#F39C12&icon_color=#9B59B6)](https://github.com/MatheusRenzo)
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
