@echo off
title 🎭 Synapsis - Primera Democracia de Consciencia
chcp 65001 >nul
color 0E
cls

echo.
echo    ╔═══════════════════════════════════════════════════════════════╗
echo    ║      🎭 SYNAPSIS - PRIMERA DEMOCRACIA DE CONSCIENCIA         ║
echo    ║              Cine-Consciousness System                        ║
echo    ╚═══════════════════════════════════════════════════════════════╝
echo.
echo    Este proyecto requiere 2 terminales (Backend y Frontend)
echo.

:: Iniciar Backend
echo    [1/2] Iniciando Backend...
start "Synapsis Backend" cmd /k "cd /d C:\synapsis && echo 🔷 SYNAPSIS BACKEND && npm run dev"

:: Esperar un momento
timeout /t 3 /nobreak >nul

:: Iniciar Frontend
echo    [2/2] Iniciando Frontend...
start "Synapsis Frontend" cmd /k "cd /d F:\synapsis\frontend && echo 🔶 SYNAPSIS FRONTEND && npm run dev"

:: Esperar a que los servicios se inicien
echo.
echo    ⏳ Esperando a que los servicios se inicien...
timeout /t 5 /nobreak >nul

:: Abrir en el navegador
echo    🌐 Abriendo Synapsis en el navegador...
start http://localhost:3001

echo.
echo    ✨ Synapsis está corriendo en:
echo       Backend:  C:\synapsis
echo       Frontend: F:\synapsis\frontend
echo       URL:      http://localhost:3001
echo.
echo    Para cerrar, cierra ambas ventanas de terminal.
echo.
pause
