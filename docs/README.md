# 🎓 Album Convite - Aspirantado 17ª Turma CBMMA

Site de formatura da 17ª Turma do Aspirantado do Corpo de Bombeiros Militar do Maranhão - Turma Governador Carlos Brandão (2026).

## 📋 Sobre

Este é um site institucional criado para comemorar a formatura da 17ª Turma de Oficiais do CBMMA, apresentando informações sobre os aspirantes, eventos e solenidades da formatura.

## 🚀 Tecnologias

- HTML5
- CSS3 (Customizado)
- JavaScript (Vanilla)
- Tailwind CSS (CDN)
- GSAP (Animations)
- Google Fonts

## 📁 Estrutura do Projeto

```
album_convite/
├── index.html              # Página principal
├── server.py               # Servidor temporário para desenvolvimento local
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos customizados
│   ├── js/
│   │   └── script.js       # Lógica JavaScript
│   └── images/             # Imagens do projeto
│       ├── principal.jpeg
│       ├── *.png, *.jpg    # Outras imagens
│       └── aspirantes/     # Fotos dos aspirantes (opcional)
└── docs/
    ├── README.md           # Este arquivo
    ├── README_SERVER.md    # Instruções do servidor
    └── GITHUB_PAGES.md     # Guia de publicação
```

## 📸 Adicionando Fotos aos Aspirantes

Para adicionar uma foto a um aspirante:

1. Coloque a imagem na pasta `assets/images/` (ou crie uma subpasta `assets/images/aspirantes/`)
2. No arquivo `assets/js/script.js`, adicione o campo `photo` ao objeto do aspirante:

```javascript
{
    num: '413',
    name: 'IURY SOUSA',
    full: 'ASP Iury Sousa',
    photo: 'assets/images/aspirantes/iury-sousa.jpg',  // Caminho da foto
    description: 'Descrição do aspirante...'
}
```

Se não houver foto, será exibido um placeholder com ícone.

## 🛠️ Desenvolvimento Local

### Opção 1: Servidor Python (Recomendado)

```bash
python3 server.py
```

Acesse: `http://localhost:8000`

### Opção 2: Servidor HTTP Simples

```bash
python3 -m http.server 8000
```

### Opção 3: Servidor Node.js (se tiver instalado)

```bash
npx http-server -p 8000
```

## 🌐 Acesso na Rede Local

O script `server.py` permite acesso na mesma rede WiFi. Execute e siga as instruções exibidas no terminal.

## 📱 GitHub Pages

Este projeto está configurado para ser publicado no GitHub Pages. Após fazer o push para o GitHub:

1. Vá em **Settings** do repositório
2. Navegue até **Pages** no menu lateral
3. Em **Source**, selecione a branch `main` (ou `master`)
4. Clique em **Save**
5. Aguarde alguns minutos e acesse: `https://[seu-usuario].github.io/[nome-do-repo]/`

## 📄 Licença



## 👥 Créditos

Desenvolvido para a 17ª Turma do Aspirantado - CBMMA 2026

---

**Corpo de Bombeiros Militar do Maranhão**  
*"Aliennam vitam et bona salvare"*  
*Vidas alheias e riquezas salvar*

