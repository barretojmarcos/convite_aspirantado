#!/usr/bin/env python3
"""
Servidor HTTP temporário para servir o site na rede local.
Permite que qualquer pessoa na mesma rede WiFi acesse o site.
"""

import http.server
import socketserver
import socket
import os
import sys
from pathlib import Path

# Porta padrão
PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Handler customizado para servir arquivos estáticos."""
    
    def end_headers(self):
        # Adiciona headers para permitir acesso de qualquer origem (útil para desenvolvimento)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()
    
    def log_message(self, format, *args):
        """Log formatado para melhor visualização."""
        print(f"[{self.log_date_time_string()}] {format % args}")

def get_local_ip():
    """Obtém o endereço IP local da máquina."""
    try:
        # Conecta a um endereço externo para determinar o IP local
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0)
        try:
            # Não precisa realmente conectar
            s.connect(('8.8.8.8', 80))
            ip = s.getsockname()[0]
        except Exception:
            ip = '127.0.0.1'
        finally:
            s.close()
        return ip
    except Exception:
        return '127.0.0.1'

def main():
    """Inicia o servidor HTTP."""
    # Muda para o diretório do script
    os.chdir(Path(__file__).parent)
    
    # Tenta encontrar uma porta disponível
    port = PORT
    while port < PORT + 10:  # Tenta até 10 portas
        try:
            with socketserver.TCPServer(("0.0.0.0", port), MyHTTPRequestHandler) as httpd:
                local_ip = get_local_ip()
                
                print("=" * 70)
                print("🚀 SERVIDOR HTTP INICIADO")
                print("=" * 70)
                print(f"\n📡 Acesse o site através de:")
                print(f"   • Local:     http://localhost:{port}")
                print(f"   • Na rede:   http://{local_ip}:{port}")
                print(f"\n📱 Para acessar de outros dispositivos na mesma rede WiFi:")
                print(f"   1. Certifique-se de que estão na mesma rede WiFi")
                print(f"   2. Abra o navegador no dispositivo")
                print(f"   3. Digite: http://{local_ip}:{port}")
                print(f"\n⏹️  Para parar o servidor, pressione Ctrl+C")
                print("=" * 70)
                print()
                
                httpd.serve_forever()
        except OSError as e:
            if "Address already in use" in str(e):
                print(f"⚠️  Porta {port} já está em uso. Tentando porta {port + 1}...")
                port += 1
            else:
                print(f"❌ Erro ao iniciar o servidor: {e}")
                sys.exit(1)
    
    print(f"❌ Não foi possível encontrar uma porta disponível entre {PORT} e {PORT + 9}")
    sys.exit(1)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⏹️  Servidor interrompido pelo usuário.")
        sys.exit(0)

