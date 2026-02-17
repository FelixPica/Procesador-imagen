#!/bin/bash

echo "🚀 Iniciando servidor local para probar la PWA..."
echo ""
echo "La aplicación estará disponible en:"
echo "  📱 http://localhost:8000"
echo "  🌐 http://$(hostname -I | awk '{print $1}'):8000"
echo ""
echo "Para probar en tu móvil:"
echo "  1. Conecta tu móvil a la misma red WiFi"
echo "  2. Abre http://$(hostname -I | awk '{print $1}'):8000 en Chrome"
echo "  3. Menú (⋮) → 'Añadir a pantalla de inicio'"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Verificar si Python está instalado
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "❌ Error: Python no está instalado"
    echo "Instala Python o usa: npx http-server"
fi
