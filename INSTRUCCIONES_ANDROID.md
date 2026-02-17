# 📱 Procesador de Imágenes - Versión Android/PWA

Esta aplicación puede instalarse como una **app nativa** en Android de 3 formas diferentes.

---

## 🚀 OPCIÓN 1: PWA (Recomendada - Más Fácil)

### ✅ Ventajas:
- Sin necesidad de desarrollar nada
- Instala desde el navegador
- Funciona offline
- Actualizaciones automáticas
- No ocupa casi espacio

### 📱 Cómo instalar en Android:

#### Método A: Usando Chrome/Edge
1. Sube los archivos a un servidor web (GitHub Pages, Netlify, etc.)
2. Abre la URL en Chrome Android
3. Toca el menú (⋮) → **"Añadir a pantalla de inicio"** o **"Instalar app"**
4. ¡Listo! Aparecerá como app en tu teléfono

#### Método B: Localhost (para pruebas)
1. Instala un servidor local en tu PC:
   ```bash
   # Opción 1: Python
   python -m http.server 8000
   
   # Opción 2: Node.js
   npx http-server
   ```
2. Conecta tu móvil a la misma red WiFi
3. Abre `http://[IP-DE-TU-PC]:8000/procesador-imagenes.html`
4. Instala desde el navegador

---

## 📦 OPCIÓN 2: APK con Capacitor (App Nativa)

### Requisitos:
- Node.js instalado
- Android Studio (para compilar)

### Pasos:

```bash
# 1. Instalar Capacitor
npm install -g @capacitor/cli @capacitor/core

# 2. Inicializar proyecto
npx cap init "Procesador Imagenes" "com.tudominio.procesador" --web-dir=.

# 3. Añadir plataforma Android
npx cap add android

# 4. Copiar archivos
npx cap copy android

# 5. Abrir en Android Studio
npx cap open android

# 6. En Android Studio:
# - Build → Build Bundle(s) / APK(s) → Build APK(s)
# - El APK se generará en: app/build/outputs/apk/debug/app-debug.apk
```

### Instalar APK en móvil:
```bash
# Transferir por USB
adb install app-debug.apk

# O enviar por email/WhatsApp y abrir en el móvil
```

---

## 🔨 OPCIÓN 3: APK Simple con WebView

### Crear proyecto Android básico:

1. **Crea un proyecto en Android Studio** (Empty Activity)

2. **AndroidManifest.xml** - Añadir permisos:
```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CAMERA"/>

<application
    android:usesCleartextTraffic="true"
    ...>
</application>
```

3. **MainActivity.java** - Código básico:
```java
package com.tudominio.procesador;

import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebSettings;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        webView = new WebView(this);
        setContentView(webView);
        
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccess(true);
        
        // Cargar el archivo HTML
        webView.loadUrl("file:///android_asset/procesador-imagenes.html");
    }
}
```

4. **Copiar archivos HTML a assets/**:
   - Crea carpeta `app/src/main/assets/`
   - Copia `procesador-imagenes.html` allí

5. **Build → Build APK**

---

## 🌐 Hosting Gratis para PWA

### GitHub Pages (Recomendado):
```bash
# 1. Crea repositorio en GitHub
# 2. Sube los archivos:
git init
git add .
git commit -m "PWA Procesador Imagenes"
git remote add origin https://github.com/TU-USUARIO/procesador-imagenes.git
git push -u origin main

# 3. Activa GitHub Pages en Settings → Pages
# 4. Tu app estará en: https://TU-USUARIO.github.io/procesador-imagenes/
```

### Netlify (Más fácil):
1. Arrastra la carpeta con los archivos a https://app.netlify.com/drop
2. ¡Listo! Te da una URL automáticamente

### Vercel:
```bash
npm i -g vercel
vercel --prod
```

---

## 📋 Archivos Necesarios

Para PWA necesitas:
- ✅ `procesador-imagenes.html` (tu app)
- ✅ `manifest.json` (configuración)
- ✅ `service-worker.js` (funcionalidad offline)
- ✅ `icon-192.png` y `icon-512.png` (iconos de la app)

---

## 🎨 Crear Iconos de la App

### Online (Más fácil):
1. Ve a https://www.favicon-generator.org/
2. Sube un logo/imagen
3. Descarga los iconos generados
4. Renombra a `icon-192.png` y `icon-512.png`

### Con ImageMagick (línea de comandos):
```bash
# Crear desde imagen original
convert logo.png -resize 192x192 icon-192.png
convert logo.png -resize 512x512 icon-512.png
```

### Diseño simple con HTML Canvas:
Puedes crear un icono simple con las iniciales "PI" (Procesador Imágenes)

---

## 🧪 Probar PWA Localmente

### Chrome DevTools:
1. Abre la app en Chrome
2. F12 → Application → Service Workers
3. Verifica que esté registrado
4. Application → Manifest - verifica configuración

### Lighthouse:
1. F12 → Lighthouse
2. Selecciona "Progressive Web App"
3. Click "Generate report"
4. Debe pasar todos los checks de PWA

---

## 📱 Funcionalidades Android Específicas

### Acceso a Cámara:
Ya funciona con `<input type="file" accept="image/*" capture="camera">`

### Compartir:
```javascript
if (navigator.share) {
  navigator.share({
    title: 'Procesador de Imágenes',
    text: 'Procesa tus imágenes fácilmente',
    url: window.location.href
  });
}
```

### Notificaciones:
```javascript
if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Procesamiento completado');
    }
  });
}
```

---

## 🎯 Recomendación Final

**Para uso personal/pruebas:** PWA con servidor local
**Para compartir con otros:** PWA en GitHub Pages/Netlify
**Para Google Play Store:** APK con Capacitor

La opción **PWA** es la más práctica: funciona inmediatamente, se actualiza sola, y no necesitas compilar nada.

---

## 🔧 Solución de Problemas

### La app no se instala:
- Verifica que uses HTTPS (o localhost)
- Comprueba que el manifest.json sea válido
- Asegúrate de tener los iconos correctos

### Service Worker no se registra:
- Abre DevTools → Console para ver errores
- Verifica que `service-worker.js` esté en la raíz
- Prueba en modo incógnito

### Imágenes no se cargan:
- En WebView Android, verifica permisos en AndroidManifest
- Habilita `setAllowFileAccess(true)`

---

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Verifica que todos los archivos estén en el mismo directorio
3. Prueba primero en PC antes de móvil

¡Disfruta tu app de procesamiento de imágenes! 🎉
