# 📱 Procesador de Imágenes - App Android/PWA

Tu aplicación web ahora está **lista para instalar como app nativa** en Android y iOS.

---

## 🚀 INSTALACIÓN RÁPIDA (3 minutos)

### Opción 1: GitHub Pages (Recomendada)

1. **Crea un repositorio en GitHub**
2. **Sube estos archivos:**
   - index.html
   - procesador-imagenes.html
   - manifest.json
   - service-worker.js
   - icon-192.png
   - icon-512.png

3. **Activa GitHub Pages:**
   - Settings → Pages → Source: main branch
   - Guarda

4. **Instala en tu móvil:**
   - Abre `https://TU-USUARIO.github.io/TU-REPO/`
   - Chrome: Menú → "Añadir a pantalla de inicio"
   - ¡Listo! 🎉

### Opción 2: Servidor Local (Para probar)

```bash
# Ejecuta esto en la carpeta donde están los archivos:
./iniciar-servidor.sh

# O manualmente:
python3 -m http.server 8000
```

Luego abre en tu móvil: `http://IP-DE-TU-PC:8000`

---

## 📦 Archivos Incluidos

```
📁 Tu carpeta
├── 📄 index.html                    # Página de instalación
├── 📄 procesador-imagenes.html      # La aplicación principal
├── 📄 manifest.json                 # Configuración PWA
├── 📄 service-worker.js             # Funcionalidad offline
├── 🖼️ icon-192.png                 # Icono pequeño
├── 🖼️ icon-512.png                 # Icono grande
├── 🖼️ favicon.png                  # Icono navegador
├── 📜 iniciar-servidor.sh           # Script servidor local
├── 📖 INSTRUCCIONES_ANDROID.md      # Guía detallada
└── 📖 README.md                     # Este archivo
```

---

## ✨ Características de la PWA

✅ **Funciona offline** - Una vez instalada, funciona sin internet
✅ **Icono en pantalla** - Como cualquier app nativa
✅ **Sin App Store** - No necesitas publicarla
✅ **Actualizaciones automáticas** - Al recargar se actualiza sola
✅ **Rápida** - Se carga instantáneamente
✅ **Segura** - Requiere HTTPS (excepto localhost)

---

## 🎯 ¿Qué hace la app?

### Modo 1: Añadir Texto a Imágenes
- Texto personalizado con estilos
- Fuentes de texto: CSV, manual, nombre archivo
- Control total de posición, color, bordes
- Exportar en JPG, PNG, WebP
- Gestión de metadatos EXIF/GPS

### Modo 2: Renombrar y Convertir
- Renombrado individual o por lotes
- Conversión de formatos
- Patrones de nomenclatura
- Control de calidad
- Preservar/eliminar metadatos

---

## 📱 Instalación en Diferentes Dispositivos

### 🤖 Android (Chrome/Edge)
1. Abre la URL en Chrome
2. Toca el menú (⋮)
3. "Añadir a pantalla de inicio" o "Instalar app"
4. Confirma

### 🍎 iOS/iPhone (Safari)
1. Abre la URL en Safari
2. Toca el botón Compartir
3. "Añadir a inicio"
4. Confirma

### 💻 Windows/Mac/Linux (Chrome/Edge)
1. Abre la URL
2. Icono ⊕ en la barra de direcciones
3. "Instalar"

---

## 🌐 Opciones de Hosting Gratis

### 1. GitHub Pages ⭐ (Recomendada)
- Gratis ilimitado
- HTTPS automático
- Muy fácil de usar
- URL: `usuario.github.io/repo`

### 2. Netlify
- Arrastra carpeta → URL instantánea
- HTTPS automático
- URL personalizada gratis

### 3. Vercel
```bash
npm i -g vercel
vercel --prod
```

### 4. Firebase Hosting
```bash
firebase init hosting
firebase deploy
```

---

## 🔧 Solución de Problemas

### ❌ "No se puede instalar la app"
- ✅ Verifica que uses HTTPS (o localhost)
- ✅ Comprueba que todos los archivos estén presentes
- ✅ Abre DevTools → Application → Manifest (debe estar sin errores)

### ❌ "Service Worker no funciona"
- ✅ Verifica que `service-worker.js` esté en la raíz
- ✅ Comprueba la consola por errores
- ✅ Prueba en modo incógnito

### ❌ "No funciona offline"
- ✅ Instala la app primero
- ✅ Abre al menos una vez con internet
- ✅ Después funcionará sin conexión

---

## 📖 Documentación Completa

Para instrucciones detalladas sobre:
- Crear APK nativo con Capacitor
- Publicar en Google Play Store
- Configuración avanzada de PWA
- Añadir funcionalidades nativas

Lee: **[INSTRUCCIONES_ANDROID.md](INSTRUCCIONES_ANDROID.md)**

---

## 🎨 Personalizar Iconos

Los iconos incluidos son genéricos. Para crear los tuyos:

### Online:
1. https://www.favicon-generator.org/
2. Sube tu logo
3. Descarga
4. Renombra a `icon-192.png` y `icon-512.png`

### Con Python:
```bash
python3 generar_iconos.py
```

---

## 🚀 Próximos Pasos

1. ✅ **Prueba localmente** con `./iniciar-servidor.sh`
2. ✅ **Sube a GitHub Pages** (5 minutos)
3. ✅ **Instala en tu móvil**
4. ✅ **Comparte la URL** con quien quieras
5. 🎉 **¡Disfruta tu app!**

---

## 💡 Tips Útiles

### Para compartir:
La URL de GitHub Pages es pública, cualquiera puede:
- Abrir en navegador
- Instalar como app
- Usar sin registrarse

### Para desarrollo:
Edita `procesador-imagenes.html` y sube a GitHub.
La PWA se actualiza sola al recargar.

### Para privacidad:
Todos los archivos se procesan **localmente** en el dispositivo.
No se envía nada a ningún servidor.

---

## 📞 Soporte

Si tienes problemas:
1. Revisa INSTRUCCIONES_ANDROID.md
2. Verifica la consola del navegador (F12)
3. Prueba primero en PC antes de móvil

---

**¡Tu app está lista! 🎉**

Desarrollada con ❤️ para funcionar en cualquier dispositivo.
