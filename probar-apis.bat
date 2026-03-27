@echo off
echo.
echo =====================================
echo 🧪 SYNAPSIS - PROBAR TODAS LAS APIs
echo =====================================
echo.
cd /d C:\synapsis\backend
echo 📋 Verificando todas las APIs...
echo.
node test-all-apis.js
echo.
echo =====================================
echo.
echo Si quieres probar una API específica:
echo   - node test-gemini.js
echo   - node test-deepseek.js
echo.
pause
