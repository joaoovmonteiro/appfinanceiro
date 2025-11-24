# 📝 Instruções para Subir o Projeto no GitHub

Siga estes passos para fazer o commit e push do projeto para o repositório GitHub.

## 1. Inicializar o Git (se ainda não foi feito)

```bash
git init
```

## 2. Adicionar o Remote do GitHub

```bash
git remote add origin https://github.com/joaoovmonteiro/appfinanceiro.git
```

## 3. Adicionar todos os arquivos

```bash
git add .
```

## 4. Fazer o commit inicial

```bash
git commit -m "feat: App de Finanças Pessoais com IA - Desafio DIO"
```

## 5. Renomear a branch para main (se necessário)

```bash
git branch -M main
```

## 6. Fazer o push para o GitHub

```bash
git push -u origin main
```

## Comandos Úteis

### Verificar status
```bash
git status
```

### Ver commits
```bash
git log
```

### Adicionar mudanças futuras
```bash
git add .
git commit -m "descrição da mudança"
git push
```

## ⚠️ Importante

- Certifique-se de que o arquivo `.env.local` está no `.gitignore` (já está configurado)
- Nunca commite chaves de API ou informações sensíveis
- Use mensagens de commit descritivas

