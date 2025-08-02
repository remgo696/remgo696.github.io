# Configuración de Secrets para GitHub Actions

Para que el deploy funcione correctamente, debes configurar los siguientes secrets en tu repositorio de GitHub:

## 🔐 Configurar Secrets en GitHub

### Paso 1: Ir a configuración de secrets
1. Ve a tu repositorio: `https://github.com/remgo696/remgo696.github.io`
2. Clic en **Settings** (Configuración)
3. En el menú lateral, clic en **Secrets and variables** > **Actions**
4. Clic en **New repository secret** para cada uno de los siguientes

### Paso 2: Crear estos secrets

| Secret Name | Valor de ejemplo | Descripción |
|-------------|------------------|-------------|
| `PUBLIC_PHONE_NUMBER` | `+51 123 456 789` | Número de teléfono de contacto |
| `PUBLIC_WHATSAPP_NUMBER` | `51123456789` | Número de WhatsApp (sin + ni espacios) |
| `PUBLIC_EMAIL` | `info@maxwell-soluciones.com` | Email de contacto |
| `PUBLIC_FACEBOOK_URL` | `https://www.facebook.com/people/Maxwell-Soluciones-Tecnol%C3%B3gicas/61578907081704/` | URL de Facebook |
| `PUBLIC_INSTAGRAM_URL` | `https://www.instagram.com/maxwell.techsolutions/` | URL de Instagram |
| `PUBLIC_SITE_URL` | `https://remgo696.github.io/maxwell-soluciones/` | URL del sitio web |
| `PUBLIC_SITE_NAME` | `Maxwell: Soluciones Tecnológicas` | Nombre del sitio |

### Paso 3: Reemplazar valores de ejemplo

⚠️ **IMPORTANTE**: Reemplaza los valores de ejemplo con los datos reales de Maxwell:

- **Teléfono**: Usar el número real de la empresa
- **WhatsApp**: Número real sin + ni espacios (ej: 51987654321)
- **Email**: Email real de contacto
- **URLs sociales**: URLs reales de las redes sociales

### Paso 4: Verificar el deploy

Una vez configurados los secrets:
1. Ve a **Actions** en tu repositorio
2. El workflow "Deploy to GitHub Pages" debería ejecutarse automáticamente
3. Espera a que termine (2-5 minutos)
4. Tu página estará disponible en la URL configurada

## 🔍 Workflow corregido

El archivo `.github/workflows/deploy.yml` ahora incluye:

✅ **Configuración específica para Astro**
- Uso de `withastro/action@v2`
- Node.js versión 20
- Package manager: npm

✅ **Variables de entorno configurables**
- Secrets de GitHub para datos sensibles
- Configuración flexible para diferentes entornos

✅ **Deploy automático a GitHub Pages**
- Build automático en cada push a main
- Deploy directo a GitHub Pages

## 🚀 URLs de la página

- **Desarrollo local**: `http://localhost:4321` (cuando ejecutes `npm run dev`)
- **Producción**: `https://remgo696.github.io/maxwell-soluciones/`

---

**Nota**: Si los secrets no están configurados, el workflow usará valores por defecto temporales, pero es recomendable configurar los valores reales para la versión de producción.
