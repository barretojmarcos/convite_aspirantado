# 📦 Guia de Publicação no GitHub Pages

## 🎯 Passo a Passo Completo

### 1️⃣ Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `album-convite-cbmma` (ou o nome que preferir)
   - **Description**: "Site da Formatura 17ª Turma Aspirantado CBMMA 2026"
   - **Visibility**: Escolha entre **Public** ou **Private**
   - **⚠️ NÃO marque** "Add a README file" (já temos um)
   - **NÃO adicione** .gitignore ou licença
5. Clique em **"Create repository"**

### 2️⃣ Conectar Repositório Local ao GitHub

Após criar o repositório no GitHub, você verá uma página com instruções. Execute os seguintes comandos no terminal (substitua `SEU-USUARIO` e `NOME-DO-REPO` pelos seus dados):

```bash
cd /Users/joaomarcos/album_convite

# Adicionar o repositório remoto (use a URL fornecida pelo GitHub)
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git

# Verificar se foi adicionado corretamente
git remote -v

# Enviar os arquivos para o GitHub
git branch -M main
git push -u origin main
```

**Exemplo:**
Se seu usuário for `joaomarcos` e o repositório for `album-convite-cbmma`:
```bash
git remote add origin https://github.com/joaomarcos/album-convite-cbmma.git
git push -u origin main
```

### 3️⃣ Configurar GitHub Pages

1. No GitHub, vá para a página do seu repositório
2. Clique em **"Settings"** (no topo da página, ao lado de "Insights")
3. No menu lateral esquerdo, role até encontrar **"Pages"**
4. Em **"Source"**, selecione:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Clique em **"Save"**
6. Aguarde alguns minutos (pode levar 1-5 minutos)

### 4️⃣ Acessar o Site

Após configurar, seu site estará disponível em:

```
https://SEU-USUARIO.github.io/NOME-DO-REPO/
```

**Exemplo:**
```
https://joaomarcos.github.io/album-convite-cbmma/
```

### 5️⃣ Atualizações Futuras

Sempre que fizer alterações no site:

```bash
cd /Users/joaomarcos/album_convite

# Ver o que foi alterado
git status

# Adicionar todas as alterações
git add .

# Fazer commit com uma mensagem descritiva
git commit -m "Descrição das alterações feitas"

# Enviar para o GitHub
git push
```

Após o push, o GitHub Pages será atualizado automaticamente em alguns minutos.

## 🔐 Autenticação no GitHub

Se aparecer erro de autenticação ao fazer `git push`, você pode:

### Opção 1: Usar Personal Access Token (Recomendado)
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Selecione escopos: `repo` (marcar todos os sub-itens)
4. Copie o token gerado
5. Use o token como senha ao fazer push

### Opção 2: GitHub CLI
```bash
# Instalar GitHub CLI (se não tiver)
brew install gh

# Autenticar
gh auth login
```

## ❓ Solução de Problemas

### Erro: "repository not found"
- Verifique se o nome do repositório e usuário estão corretos
- Certifique-se de que o repositório existe no GitHub

### Erro: "permission denied"
- Verifique suas credenciais do GitHub
- Use Personal Access Token se necessário

### Site não aparece
- Aguarde alguns minutos após ativar o GitHub Pages
- Verifique se a branch `main` está selecionada nas configurações
- Verifique se o arquivo `index.html` está na raiz do repositório

## 📝 Notas Importantes

- O GitHub Pages é **gratuito** para repositórios públicos
- Para repositórios privados, requer GitHub Pro (pago)
- O site será atualizado automaticamente a cada push
- O domínio padrão é: `username.github.io/repository-name`

## 🎉 Pronto!

Seu site está no ar! Compartilhe o link com quem precisar acessar.

