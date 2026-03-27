@echo off
echo 🌟 ========================================
echo 🧠 SYNAPSIS - INICIO COMPLETO
echo 🌟 ========================================

echo.
echo 🔍 Verificando dependencias frontend...
if not exist "F:\synapsis\frontend\node_modules" (
    echo ❌ Dependencias frontend no encontradas
    echo 📦 Ejecuta primero: install-frontend.bat
    echo.
    pause
    exit /b 1
)

echo ✅ Dependencias frontend OK

echo.
echo 🚀 Iniciando SYNAPSIS completo...
echo 📍 Backend: http://localhost:3000
echo 📍 Frontend: http://localhost:3001
echo.
echo 💡 Presiona Ctrl+C para detener ambos servidores
echo.

cd /d F:\synapsis

echo ⚡ Iniciando backend y frontend simultáneamente...
call npm run dev:all