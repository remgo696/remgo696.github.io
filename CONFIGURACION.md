# Instrucciones de Configuración - Maxwell: Soluciones Tecnológicas

## 📋 Pasos para completar la configuración

### 1. Instalar Node.js y npm
Si no tienes Node.js instalado, descárgalo desde [nodejs.org](https://nodejs.org/)

### 2. Instalar dependencias
```bash
cd "c:\Users\dvlad\OneDrive\Personal Data\Work\MAXWELL\maxwell_web\remgo696.github.io"
npm install
```

### 3. Configurar variables de entorno
1. Copia el archivo `.env.example` como `.env`
2. Actualiza los datos de contacto reales:
   - Número de teléfono y WhatsApp
   - Email de contacto
   - URLs de redes sociales

### 4. Actualizar información de contacto en los archivos

#### En `src/components/Contact.tsx`:
- Línea 47: Actualizar número de teléfono
- Línea 54: Actualizar número de WhatsApp
- Línea 61: Actualizar email

#### En `src/components/Footer.astro`:
- Línea 45: Actualizar teléfono
- Línea 49: Actualizar email

#### En `src/layouts/Layout.astro`:
- Línea 31: Actualizar número en el Schema

### 🔧 Solución de errores comunes

#### Error de configuración experimental:
Si obtienes el error: `experimental Invalid or outdated experimental feature`
- Este error ha sido corregido en el `astro.config.mjs`
- Las opciones experimentales obsoletas han sido eliminadas
- La configuración ahora es compatible con Astro v4+

### 5. Comandos de desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción local
npm run preview
```

### 6. Despliegue en GitHub Pages

1. El archivo `.github/workflows/deploy.yml` ya está configurado
2. Asegúrate de que GitHub Pages esté habilitado en tu repositorio:
   - Ve a Settings > Pages
   - Selecciona "GitHub Actions" como source
3. Haz push a la rama main para activar el despliegue automático

### 7. Configuración final de GitHub Pages

En la configuración del repositorio GitHub:
1. Ve a Settings > Pages
2. En "Build and deployment", selecciona "GitHub Actions"
3. La página estará disponible en: `https://remgo696.github.io/maxwell-soluciones/`

### 8. Verificaciones post-despliegue

- ✅ Verifica que todas las imágenes cargan correctamente
- ✅ Prueba todos los enlaces de contacto
- ✅ Verifica que el botón de WhatsApp funciona
- ✅ Comprueba que las animaciones se ejecutan correctamente
- ✅ Testa la responsividad en dispositivos móviles

### 9. SEO y optimización

La página ya incluye:
- ✅ Meta tags optimizados para Lima Metropolitana
- ✅ Structured data (Schema.org)
- ✅ Sitemap automático
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Manifest PWA

### 🎨 Personalización adicional

#### Colores de marca (ya configurados):
- **Primario**: #0D1B2A (fondos, textos destacados)
- **Secundario**: #A7A9AC (textos secundarios)
- **Acento**: #00BFFF (botones, links, animaciones)

#### Fuentes utilizadas:
- **Headings**: Poppins (bold, elegant)
- **Body**: Inter (readable, modern)

### 📞 Datos de contacto actuales a actualizar:

Reemplazar las "X" con los números reales:
- **Teléfono**: +51 XXX XXX XXX
- **WhatsApp**: 51XXXXXXXXX
- **Email**: info@maxwell-soluciones.com (o el email real)

### 🌟 Características implementadas:

1. **Header fijo** con navegación smooth scroll
2. **Hero section** con animaciones fade-in
3. **Sección Sobre Nosotros** con slide-in animations
4. **Servicios** con cards animadas y efectos hover
5. **Contacto** con múltiples métodos de comunicación
6. **Footer** completo con enlaces sociales
7. **Botón flotante de WhatsApp** con animación pulse
8. **Optimización SEO** completa para Lima Metropolitana
9. **Diseño responsive** mobile-first
10. **Animaciones suaves** con Framer Motion

### 🚀 ¡Listo para usar!

Una vez completados estos pasos, tendrás una página web profesional completamente funcional para Maxwell: Soluciones Tecnológicas, optimizada para aparecer en búsquedas locales de Lima Metropolitana y con todas las características solicitadas.
