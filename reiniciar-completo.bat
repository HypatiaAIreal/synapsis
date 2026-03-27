@echo off
echo.
echo =====================================
echo 🧠 SYNAPSIS - REINICIO COMPLETO
echo =====================================
echo.
echo 🔄 Matando procesos de Node.js...
taskkill /F /IM node.exe 2>NUL
echo.
echo 🧪 Verificando configuración...
cd /d C:\synapsis\backend
node test-ai-config.js
echo.
echo 🚀 Iniciando servidor con análisis narrativo...
echo.
timeout /t 3 /nobreak > NUL
npm run dev
