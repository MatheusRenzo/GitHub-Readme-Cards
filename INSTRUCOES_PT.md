# 📋 Instruções em Português - GitHub Readme Cards

## 🚀 Como Baixar o Projeto

### Opção 1: Download como ZIP
1. Clique no botão verde "Code" no repositório
2. Selecione "Download ZIP"
3. Extraia o arquivo ZIP em sua pasta de trabalho
4. Abra o terminal na pasta extraída

### Opção 2: Clone via Git
```bash
git clone https://github.com/MatheusRenzo/GitHub-Readme-Cards.git
cd GitHub-Readme-Cards
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js versão 22 ou superior
- npm ou yarn

### Passos de Instalação
1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   PAT_1=seu_token_github_aqui
   CACHE_SECONDS=86400
   ```

3. **Executar testes:**
   ```bash
   npm test
   ```

4. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## 🎯 Funcionalidades Principais

### Cartões Disponíveis
- **📊 Cartão de Estatísticas:** Mostra suas estatísticas do GitHub
- **📁 Cartão de Repositório:** Exibe informações de um repositório específico
- **🔤 Cartão de Linguagens:** Mostra suas principais linguagens de programação
- **⏰ Cartão WakaTime:** Exibe suas estatísticas de tempo de programação
- **📝 Cartão de Gist:** Mostra informações de um gist específico

### Personalização
- **Temas:** Mais de 50 temas pré-definidos
- **Cores:** Personalize cores de título, texto, fundo e bordas
- **Layouts:** Diferentes estilos de apresentação
- **Idiomas:** Suporte para múltiplos idiomas incluindo português

## 🌐 Uso da API

### Endpoints Disponíveis
- `/api` - Cartão de estatísticas
- `/api/pin` - Cartão de repositório
- `/api/top-langs` - Cartão de linguagens
- `/api/wakatime` - Cartão WakaTime
- `/api/gist` - Cartão de Gist

### Exemplo de Uso
```markdown
![Minhas Estatísticas](https://seu-dominio.vercel.app/api?username=seu_usuario&theme=dark&show_icons=true)
```

## 🚀 Implantação

### No Vercel (Recomendado)
1. Faça fork do repositório
2. Conecte sua conta do Vercel
3. Importe o projeto
4. Configure as variáveis de ambiente
5. Deploy automático!

### Em Outras Plataformas
1. Clone o repositório
2. Instale as dependências
3. Configure as variáveis de ambiente
4. Execute `node express.js`

## 🔧 Configuração Avançada

### Variáveis de Ambiente
- `PAT_1`: Token de acesso pessoal do GitHub
- `CACHE_SECONDS`: Tempo de cache em segundos
- `PORT`: Porta do servidor (padrão: 9000)

### Personalização de Temas
Edite o arquivo `themes/index.js` para criar novos temas ou modificar existentes.

## 📚 Documentação

- **README.md**: Documentação completa em português
- **themes/README.md**: Guia de temas disponíveis
- **api/**: Endpoints da API
- **src/**: Código fonte principal

## 🤝 Contribuição

1. Faça fork do projeto
2. Crie uma branch para sua funcionalidade
3. Faça commit das mudanças
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

- **Issues:** [GitHub Issues](https://github.com/MatheusRenzo/GitHub-Readme-Cards/issues)
- **Discussões:** [GitHub Discussions](https://github.com/MatheusRenzo/GitHub-Readme-Cards/discussions)

---

**⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!**

Feito com ❤️ e JavaScript por [MatheusRenzo](https://github.com/MatheusRenzo)
