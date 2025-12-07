# 📸 Guia de Otimização de Imagens

## Estrutura para Otimização

Este projeto está preparado para suportar imagens otimizadas. Seguem as recomendações:

### Formatos Recomendados

1. **WebP com fallback** - Formato moderno, menor tamanho, melhor qualidade
2. **JPEG otimizado** - Para compatibilidade universal
3. **PNG otimizado** - Apenas quando necessário (transparência)

### Ferramentas Recomendadas

1. **Compressão**:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (macOS)
   - Squoosh (https://squoosh.app/)

2. **Conversão para WebP**:
   - Squoosh
   - cwebp (linha de comando)
   - Online: https://convertio.co/jpg-webp/

### Estrutura de Pastas

```
assets/images/
├── principal.JPG (ou principal.webp + principal.jpg como fallback)
├── aspirantes/
│   ├── nome-aspirante.jpg
│   └── nome-aspirante.webp (opcional)
└── ...
```

### Implementação Futura de srcset

O código está preparado para adicionar `srcset` nas imagens:

```html
<img 
    src="image.jpg" 
    srcset="image.webp 1x, image@2x.webp 2x"
    alt="Descrição"
    loading="lazy"
>
```

### Tamanhos Recomendados

- **Hero image**: Max 1920px de largura
- **Galeria coletiva**: Max 1200px de largura
- **Fotos aspirantes**: 300x300px (quadrado)
- **Logo navbar**: Max 200px de largura

### Comandos Úteis (se usar ImageMagick)

```bash
# Converter para WebP
convert input.jpg -quality 85 output.webp

# Redimensionar e comprimir
convert input.jpg -resize 1200x -quality 85 output.jpg

# Otimizar PNG
pngquant --quality=65-80 input.png
```

---

**Nota**: As imagens atuais não foram otimizadas automaticamente. Use as ferramentas acima para otimizar manualmente antes do deploy de produção.

