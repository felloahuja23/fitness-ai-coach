# FITNESS AI COACH V2.0

PWA para iPhone alojada en GitHub Pages. Los datos personales se almacenan exclusivamente en `localStorage` del dispositivo (sin backend ni IA).

## Actualización
1. **Antes de actualizar**, abre la app V1.1 en tu iPhone y exporta el respaldo JSON desde Progreso. Guárdalo en Archivos.
2. En GitHub `felloahuja23/fitness-ai-coach`, reemplaza `index.html`, `app.js`, `service-worker.js`, `manifest.webmanifest` y añade `style.css`, `README.md`. Conserva los íconos actuales.
3. GitHub Pages publicará automáticamente los cambios. Abre la PWA con internet y ciérrala/reábrela si aún aparece V1.1.
4. En Perfil puedes exportar un respaldo completo V2 e importar respaldos de check-ins V1.1.

**Migración:** el código detecta `fitness-ai-coach-checkins-v1`, lo copia a `fitness-v2-store` la primera vez y no borra la clave original.
**Importante:** la versión V1.1 exportaba solo check-ins, no alimentos ni otros datos. El almacenamiento local puede perderse si iOS limpia los datos del sitio. Realiza respaldos frecuentes.
**Rutinas:** plantillas orientativas; evita dolor y pide adaptación clínica si es necesario por tu escoliosis.
