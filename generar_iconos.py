#!/usr/bin/env python3
"""
Generador de iconos para PWA
Crea iconos de 192x192 y 512x512 con las iniciales "PI"
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, filename):
    """Crear icono con fondo degradado y texto"""
    
    # Crear imagen con fondo degradado
    img = Image.new('RGB', (size, size), color='white')
    draw = ImageDraw.Draw(img)
    
    # Degradado púrpura (similar al gradiente de la app)
    for y in range(size):
        # Interpolación de color
        r = int(102 + (118 - 102) * (y / size))
        g = int(126 + (75 - 126) * (y / size))
        b = int(234 + (162 - 234) * (y / size))
        draw.rectangle([(0, y), (size, y+1)], fill=(r, g, b))
    
    # Añadir texto "PI"
    text = "PI"
    
    # Intentar usar una fuente, si no usar la predeterminada
    try:
        font_size = int(size * 0.5)
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    # Obtener tamaño del texto
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Centrar texto
    x = (size - text_width) // 2
    y = (size - text_height) // 2 - int(size * 0.05)
    
    # Dibujar texto con sombra
    shadow_offset = int(size * 0.01)
    draw.text((x + shadow_offset, y + shadow_offset), text, font=font, fill=(0, 0, 0, 128))
    draw.text((x, y), text, font=font, fill='white')
    
    # Guardar
    img.save(filename, 'PNG', optimize=True)
    print(f"✅ Creado: {filename} ({size}x{size})")

def main():
    print("🎨 Generando iconos para la PWA...")
    
    # Crear iconos de diferentes tamaños
    create_icon(192, 'icon-192.png')
    create_icon(512, 'icon-512.png')
    
    # Crear también favicon
    create_icon(32, 'favicon.png')
    
    print("\n✨ ¡Iconos creados exitosamente!")
    print("\nArchivos generados:")
    print("  - icon-192.png  (para manifest.json)")
    print("  - icon-512.png  (para manifest.json)")
    print("  - favicon.png   (opcional, para el navegador)")

if __name__ == "__main__":
    main()
