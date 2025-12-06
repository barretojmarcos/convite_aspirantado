# 🚀 Servidor Temporário para Rede Local

Este servidor permite que qualquer pessoa na mesma rede WiFi acesse o site.

## 📋 Pré-requisitos

- Python 3 (geralmente já instalado no macOS)

## 🎯 Como Usar

### Opção 1: Executar o script diretamente

```bash
python3 server.py
```

ou simplesmente:

```bash
./server.py
```

### Opção 2: Usar Python simples

Se o script não funcionar, você também pode usar o servidor HTTP simples do Python:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Depois, obtenha seu IP local com:

```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

ou

```bash
ipconfig getifaddr en0
```

## 📱 Acessando de Outros Dispositivos

1. **Certifique-se** de que seu computador e o dispositivo estão na **mesma rede WiFi**

2. **Encontre o IP local** da sua máquina (será mostrado quando iniciar o servidor)

3. **No dispositivo** (celular, tablet, outro computador):
   - Abra o navegador
   - Digite: `http://SEU_IP_LOCAL:8000`
   - Exemplo: `http://192.168.1.100:8000`

## ⚠️ Importante

- Este servidor é **temporário** e para quando você pressionar `Ctrl+C`
- Funciona apenas na **mesma rede WiFi/LAN**
- Não é seguro para uso em redes públicas
- Use apenas para compartilhamento local temporário

## 🔧 Solução de Problemas

### Porta já em uso
Se a porta 8000 estiver ocupada, o script tentará usar a porta 8001, 8002, etc.

### Não consegue acessar de outros dispositivos
1. Verifique se estão na mesma rede WiFi
2. Verifique o firewall do macOS (pode bloquear conexões)
3. Tente desabilitar temporariamente o firewall:
   - Preferências do Sistema → Segurança e Privacidade → Firewall

### Encontrar seu IP manualmente
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}'
```

