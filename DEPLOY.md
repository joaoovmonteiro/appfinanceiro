# 🚀 Guia de Deploy

Este guia explica como fazer o deploy do App Finanças em diferentes plataformas.

## Vercel (Recomendado)

1. **Conecte seu repositório GitHub**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Selecione o repositório `appfinanceiro`

2. **Configure as variáveis de ambiente**
   - Na seção "Environment Variables", adicione:
     - `NEXT_PUBLIC_OPENAI_API_KEY` = sua chave da OpenAI (opcional)

3. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build completar
   - Seu app estará disponível em `https://seu-app.vercel.app`

## Netlify

1. **Conecte seu repositório**
   - Acesse [netlify.com](https://netlify.com)
   - Faça login e clique em "New site from Git"
   - Selecione o repositório

2. **Configure o build**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Variáveis de ambiente**
   - Adicione `NEXT_PUBLIC_OPENAI_API_KEY` nas configurações

## Build Local

```bash
npm run build
npm start
```

O app estará disponível em `http://localhost:3000`

