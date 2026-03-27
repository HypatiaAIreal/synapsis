@echo off
echo.
echo =====================================
echo 🧠 SYNAPSIS - APLICAR SOLUCIÓN DEFINITIVA
echo =====================================
echo.
echo 🔄 Respaldando archivo actual...
copy /Y "C:\synapsis\backend\src\routes\ai-config.routes.js" "C:\synapsis\backend\src\routes\ai-config.routes.backup.js"
echo.
echo 🚀 Aplicando versión con lazy loading...
copy /Y "C:\synapsis\backend\src\routes\ai-config-lazy.routes.js" "C:\synapsis\backend\src\routes\ai-config.routes.js"
echo.
echo ✅ Solución aplicada!
echo.
echo 🔥 Ahora:
echo    1. Ejecuta: reiniciar-completo.bat
echo    2. Prueba generar un análisis con Claude
echo.
pause
