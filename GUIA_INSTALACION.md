# FITNESS AI COACH — Instalación iPhone sin renovación cada 7 días

## Publicar gratis en GitHub Pages

1. Entra a https://github.com y crea un repositorio público con nombre `fitness-ai-coach`.
2. Sube **los archivos del interior de esta carpeta** a la raíz del repositorio, no el ZIP ni una carpeta contenedora. Incluye `index.html`, `app.js`, `service-worker.js`, `manifest.webmanifest`, ambos íconos y `.nojekyll`.
3. En el repositorio entra a **Settings → Pages → Build and deployment**. En **Source** elige **Deploy from a branch** y configura `main` y `/(root)`. Guarda.
4. Abre la dirección indicada por GitHub Pages, generalmente `https://TU-USUARIO.github.io/fitness-ai-coach/`. No es una URL real hasta que la publiques.
5. Desde tu iPhone, abre ese enlace con Safari. Toca **Compartir → Agregar a Inicio** y activa **Abrir como app web** si aparece.
6. Abre el nuevo ícono en tu pantalla de inicio. Tras la primera carga conectada, prueba el modo avión para confirmar que las pantallas principales están disponibles.

## Privacidad y respaldo

- GitHub Pages **hace pública la interfaz y código**, no los check-ins que tú registras después en tu iPhone. No subas exportaciones JSON, contraseñas, llaves API ni información personal al repositorio.
- El historial se guarda en `localStorage` dentro del sitio/app instalado. No se sincroniza y puede perderse por eliminación de la app, limpieza de datos o políticas de almacenamiento de iOS.
- En **Progreso → Exportar respaldo JSON**, guarda una copia en Archivos. **Progreso → Restaurar respaldo JSON** permite recuperarla (reemplaza el historial actual).
- No existe aún un chat IA ni un registro detallado de alimentos. El módulo Coach es una sección de planeación.
- GitHub Pages no restringe visitantes: quien conozca la URL puede ver la interfaz vacía, pero no tus registros locales.

## Nota

Esta aplicación está lista para publicar como PWA. La publicación en tu cuenta requiere tus acciones en GitHub y no se ha realizado automáticamente.
