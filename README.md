# NichePost AI

**Gerador de Posts para Instagram especializado em Nutricionistas, Coaches de Saúde e Profissionais de Fitness**

Economize horas toda semana criando conteúdo engajador e profissional para o Instagram com a ajuda de Inteligência Artificial otimizada para o nicho de saúde e nutrição.

🌿 Posts educativos, receitas saudáveis, dicas de emagrecimento, desmistificação de mitos nutricionais e muito mais — gerados em segundos.

## ✨ Funcionalidades

- Geração de legendas completas com IA especializada em nutrição
- Sugestão de hashtags otimizadas para o nicho
- Tom de voz personalizável (educativo, motivacional, divertido, etc.)
- Público-alvo específico (ex: mulheres 30-45 anos, iniciantes, atletas)
- Geração em lote (até 10 posts de uma vez)
- Suporte a carrossel, stories e reels
- Histórico de posts gerados
- Interface moderna e responsiva (mobile-first)
- Planos Freemium, Pro e Premium com integração Stripe

## 🛠️ Tecnologias Utilizadas

- **Vite.js** – Build tool ultra rápido
- **React** + **TypeScript** – Frontend robusto e tipado
- **Tailwind CSS** – Estilização rápida e moderna
- **Supabase** – Autenticação e banco de dados
- **Stripe** – Pagamentos e assinaturas
- **OpenAI / Groq API** – Geração de conteúdo com IA

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 18 ou superior
- Conta no Supabase (para auth e DB)
- Chave da OpenAI ou Groq API
- Conta no Stripe (para testes)

### Passos

1. Clone o repositório
```bash
git clone https://github.com/Flaviohmm/nichepostai.git
cd nichepostai
```

2. Instale as dependências
```bash
npm install
```

3. Crie um arquivo .env na raiz do projeto (baseado no .env.example)
```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anon
VITE_OPENAI_API_KEY=sua_chave_openai_ou_groq
VITE_STRIPE_PUBLISHABLE_KEY=sua_chave_publica_stripe
```

4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

5. Acesse no navegador
```text
http://localhost:5175
```

## 📦 Scripts Disponíveis

```bash
npm run dev        # Inicia o servidor de desenvolvimento
npm run build      # Gera build de produção
npm run preview    # Preview do build de produção
npm run lint       # Executa linting (se configurado)
```

## 🚀 Deploy

Recomendado:

- Vercel (mais fácil – conecte o repo e deploy automático)
- Netlify
- Cloudflare Pages

Basta conectar o repositório GitHub e configurar as variáveis de ambiente.

## 📈 Roadmap Futuro

- Integração direta com Instagram (postagem automática)
- Mais nichos (odontologia, psicologia, fisioterapia)
- Geração de imagens com DALL-E ou Flux
- Analytics de engajamento por post
- Templates prontos por tema (ex: "Semana de Detox")

## 🤝 Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um Pull Request.

1. Fork o projeto
2. Crie uma branch (``git checkout -b feature/nova-funcionalidade``)
3. Commit suas mudanças (``git commit -m 'Adiciona nova funcionalidade'``)
4. Push para a branch (``git push origin feature/nova-funcionalidade``)
5. Abra um Pull Request`

## 📄 Licença
Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor
Feito com ❤️ por Flavio Macedo – Empreendedor Solo & Desenvolvedor Fullstack