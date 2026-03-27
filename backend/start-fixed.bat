@echo off
echo ==========================================
echo   INICIANDO SYNAPSIS - SOLUCION RAPIDA
echo ==========================================
echo.

echo 1. Probando servicio...
node test-quick.js

echo.
echo 2. Iniciando servidor...
echo.
echo IMPORTANTE: Despues de ver "Servidor ejecutandose", abre:
echo - Frontend: http://localhost:3001
echo - Test API: http://localhost:3000/api/ai/providers
echo.
echo Presiona Ctrl+C para detener
echo.

npm run dev
