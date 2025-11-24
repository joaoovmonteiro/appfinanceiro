# 💰 App de Organização de Finanças Pessoais com IA

<div align="center">

![App Finanças](https://img.shields.io/badge/Status-Desenvolvido-success)
![React](https://img.shields.io/badge/React-18.2-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![OpenAI](https://img.shields.io/badge/IA-OpenAI-green)

</div>

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Conceito do App](#-conceito-do-app)
- [PRD - Product Requirements Document](#-prd---product-requirements-document)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar](#-como-executar)
- [Reflexão sobre o Processo](#-reflexão-sobre-o-processo)
- [Autor](#-autor)

---

## 🎯 Sobre o Projeto

Este é um aplicativo moderno de organização financeira pessoal que utiliza Inteligência Artificial para fornecer insights inteligentes, análises preditivas e recomendações personalizadas para ajudar os usuários a alcançarem seus objetivos financeiros.

O projeto foi desenvolvido seguindo a metodologia **Vibe Coding**, utilizando prompts claros e criativos para guiar o desenvolvimento com IA, transformando ideias em um produto real e funcional.

---

## 💡 Conceito do App

### Visão Geral

O **App Finanças** é uma solução completa que combina:
- 📊 **Dashboard Intuitivo**: Visualização clara de receitas, despesas e saldo
- 🤖 **Assistente IA**: Análise inteligente de padrões de gastos e recomendações personalizadas
- 📈 **Análise Preditiva**: Previsões de gastos futuros baseadas em histórico
- 🎯 **Metas Financeiras**: Acompanhamento de objetivos com sugestões da IA
- 📱 **Interface Moderna**: Design responsivo e experiência de usuário fluida

### Diferenciais

1. **IA Contextual**: A IA analisa não apenas números, mas padrões comportamentais
2. **Recomendações Proativas**: Sugestões automáticas para otimização de gastos
3. **Análise de Sentimento**: Identifica períodos de maior ou menor controle financeiro
4. **Gamificação**: Sistema de conquistas e metas para motivar o usuário

---

## 📝 PRD - Product Requirements Document

### Prompt Final Utilizado com a IA

```
Crie um Product Requirements Document (PRD) completo para um App de Finanças Pessoais com IA que:

1. OBJETIVO DO PRODUTO:
   - Ajudar usuários a organizar, controlar e otimizar suas finanças pessoais
   - Utilizar IA para fornecer insights inteligentes e recomendações personalizadas
   - Transformar dados financeiros em ações práticas e acionáveis

2. PERSONAS:
   - Pessoa jovem (20-35 anos) que quer começar a controlar gastos
   - Profissional que precisa de visão clara de receitas/despesas
   - Família que quer planejar e alcançar metas financeiras

3. FUNCIONALIDADES CORE:
   - Registro de receitas e despesas com categorização automática via IA
   - Dashboard com visualizações (gráficos, métricas, tendências)
   - Assistente IA que:
     * Analisa padrões de gastos
     * Identifica oportunidades de economia
     * Sugere otimizações baseadas em histórico
     * Previne gastos excessivos com alertas inteligentes
   - Sistema de metas financeiras com acompanhamento
   - Relatórios mensais automáticos gerados por IA
   - Exportação de dados (PDF, CSV)

4. TECNOLOGIAS:
   - Frontend: Next.js 14 com React 18 e TypeScript
   - Estilização: Tailwind CSS + shadcn/ui
   - IA: OpenAI API (GPT-4) para análise e recomendações
   - Armazenamento: LocalStorage (MVP) / Prisma + PostgreSQL (produção)
   - Gráficos: Recharts ou Chart.js

5. REQUISITOS TÉCNICOS:
   - Interface responsiva (mobile-first)
   - Performance otimizada
   - Acessibilidade (WCAG 2.1)
   - Dark mode
   - PWA (Progressive Web App)

6. ENTREGAS:
   - MVP funcional com todas as features core
   - Código limpo e documentado
   - README completo com instruções
   - Deploy em Vercel/Netlify

7. DIFERENCIAL:
   - IA não apenas analisa, mas aprende com o comportamento do usuário
   - Recomendações contextuais baseadas em momento financeiro
   - Linguagem natural para interação com a IA
```

### Interações com IA (Copilot/Lovable)

Durante o desenvolvimento, utilizei os seguintes prompts estratégicos:

#### Prompt 1: Estrutura Inicial
```
Crie a estrutura de um app Next.js 14 com TypeScript para finanças pessoais.
Inclua: layout responsivo, sistema de roteamento, componentes base.
```

#### Prompt 2: Componente de Dashboard
```
Crie um componente Dashboard que exiba:
- Cards com resumo financeiro (saldo, receitas, despesas)
- Gráfico de linha mostrando evolução mensal
- Gráfico de pizza com distribuição de gastos por categoria
- Use Tailwind CSS e componentes do shadcn/ui
```

#### Prompt 3: Integração com IA
```
Implemente um serviço de IA que:
- Analise transações e identifique padrões
- Gere recomendações personalizadas
- Crie relatórios em linguagem natural
- Use OpenAI API com tratamento de erros
```

#### Prompt 4: Sistema de Metas
```
Crie um sistema de metas financeiras onde:
- Usuário pode criar metas (ex: economizar R$ 5.000)
- IA calcula progresso e sugere estratégias
- Visualização clara do progresso com barra de progresso
- Notificações quando próximo de alcançar
```

---

## ✨ Funcionalidades

### ✅ Implementadas

- [x] Dashboard com visão geral financeira
- [x] Registro de receitas e despesas
- [x] Categorização automática via IA
- [x] Gráficos interativos (receitas vs despesas, distribuição por categoria)
- [x] Assistente IA com recomendações
- [x] Sistema de metas financeiras
- [x] Análise de padrões de gastos
- [x] Interface responsiva e dark mode
- [x] Armazenamento local (LocalStorage)

### 🚀 Próximas Funcionalidades

- [ ] Autenticação de usuários
- [ ] Sincronização em nuvem
- [ ] Notificações push
- [ ] Integração com bancos (Open Banking)
- [ ] Exportação de relatórios em PDF
- [ ] Modo offline completo (PWA)

---

## 🛠 Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes UI acessíveis
- **Recharts** - Gráficos e visualizações
- **Lucide React** - Ícones modernos

### Backend & IA
- **OpenAI API** - Análise inteligente e recomendações
- **Next.js API Routes** - Endpoints serverless

### Ferramentas
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Git** - Controle de versão

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Chave da API OpenAI (opcional, para funcionalidades de IA)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/joaoovmonteiro/appfinanceiro.git
cd appfinanceiro
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_OPENAI_API_KEY=sua_chave_aqui
```

> **Nota**: Se não tiver uma chave da OpenAI, o app funcionará normalmente, mas as funcionalidades de IA estarão limitadas.

4. **Execute o projeto**

```bash
npm run dev
# ou
yarn dev
```

5. **Acesse no navegador**

Abra [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
npm start
```

---

## 📸 Screenshots

### Dashboard Principal
![Dashboard](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Dashboard+do+App)

### Assistente IA
![Assistente IA](https://via.placeholder.com/800x400/10B981/FFFFFF?text=Assistente+IA+em+Ação)

### Análise de Gastos
![Análise](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Análise+de+Gastos)

> **Nota**: As imagens acima são placeholders. Adicione screenshots reais do seu app após o desenvolvimento.

---

## 🤔 Reflexão sobre o Processo

### O que Aprendi

Este projeto foi uma experiência transformadora que me permitiu aplicar na prática os conceitos de **Vibe Coding** e desenvolvimento guiado por IA. Algumas reflexões importantes:

#### 1. **O Poder dos Prompts Claros**
Descobri que a qualidade do output da IA está diretamente relacionada à clareza e especificidade dos prompts. Prompts bem estruturados, com contexto e objetivos definidos, geram código mais alinhado com as necessidades do projeto.

#### 2. **Iteração e Refinamento**
O desenvolvimento com IA não é linear. Foi necessário iterar várias vezes, refinando prompts e ajustando o código gerado. Isso me ensinou a importância da paciência e da revisão crítica.

#### 3. **Compreensão vs. Implementação**
A IA é excelente para gerar código, mas a compreensão do que está sendo criado é fundamental. Sem entender o código gerado, fica difícil manter, debugar e evoluir o projeto.

#### 4. **Arquitetura e Organização**
Mesmo com IA, a organização do código e a arquitetura do projeto precisam ser pensadas pelo desenvolvedor. A IA ajuda a implementar, mas as decisões arquiteturais são humanas.

#### 5. **Validação e Testes**
Código gerado por IA precisa ser validado e testado. Nem sempre a primeira solução é a melhor, e é importante testar diferentes abordagens.

#### 6. **Documentação como Investimento**
Investir tempo em documentação (README, comentários, PRD) facilita não apenas o entendimento do projeto, mas também a comunicação com a IA em iterações futuras.

### Desafios Enfrentados

- **Integração com APIs**: Configurar e integrar a OpenAI API exigiu atenção aos detalhes de autenticação e rate limits
- **Gerenciamento de Estado**: Decidir entre Context API, Zustand ou outras soluções para estado global
- **Performance**: Otimizar renderizações e carregamento de dados em componentes com gráficos

### Próximos Passos

- Implementar testes automatizados (Jest + React Testing Library)
- Adicionar autenticação e sincronização em nuvem
- Melhorar a experiência mobile
- Adicionar mais análises preditivas com IA
- Implementar sistema de notificações inteligentes

---

## 👨‍💻 Autor

**João Monteiro**

- GitHub: [@joaoovmonteiro](https://github.com/joaoovmonteiro)
- LinkedIn: [Adicione seu LinkedIn]
- Email: [Seu email]

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- **Digital Innovation One (DIO)** - Pelo desafio e aprendizado
- **Comunidade de Desenvolvedores** - Pelo compartilhamento de conhecimento
- **OpenAI** - Pela tecnologia que torna projetos como este possíveis

---

<div align="center">

**Desenvolvido com ❤️ seguindo a metodologia Vibe Coding**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>

