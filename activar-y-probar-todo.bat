@echo off
echo.
echo =====================================
echo 🚀 SYNAPSIS - ACTIVAR TODOS LOS MODELOS
echo =====================================
echo.
echo 1️⃣ ACTIVANDO modelos en MongoDB...
cd /d C:\synapsis\backend
node activate-all-models.js
echo.
echo 2️⃣ Probando DeepSeek...
node test-deepseek.js
echo.
echo 3️⃣ Probando Gemini...
node test-gemini.js
echo.
echo ✅ Proceso completado
echo.
echo 🔄 Ahora reinicia el servidor para aplicar cambios
echo.
pause
