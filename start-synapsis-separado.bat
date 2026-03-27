@echo off
echo 🌟 ========================================
echo 🧠 SYNAPSIS - INICIO SEPARADO
echo 🌟 ========================================

echo.
echo 🚀 Iniciando SYNAPSIS en ventanas separadas...
echo.

echo ⚡ Iniciando BACKEND en nueva ventana...
start "SYNAPSIS Backend" cmd /k "cd /d F:\synapsis && npm run dev"

echo.
echo ⏳ Esperando 3 segundos para que inicie el backend...
timeout /t 3 /nobreak >nul

echo.
echo 🌈 Iniciando FRONTEND en nueva ventana...
start "SYNAPSIS Frontend" cmd /k "cd /d F:\synapsis\frontend && npm run dev"

echo.
echo ✅ ¡SYNAPSIS iniciado en ventanas separadas!
echo.
echo 📍 Backend: http://localhost:3000
echo 📍 Frontend: http://localhost:3001
echo.
echo 💡 Cierra las ventanas individuales para detener cada servidor
echo.
pause