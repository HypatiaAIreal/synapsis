@echo off
echo 📦 ========================================
echo 🧠 SYNAPSIS - INSTALAR DEPENDENCIAS
echo 📦 ========================================

echo.
echo 🔧 Instalando dependencias necesarias para componentes espectaculares...
echo.

cd /d F:\synapsis\frontend

echo 📦 Instalando lucide-react (iconos hermosos)...
call npm install lucide-react

echo.
echo 📡 Instalando socket.io-client (chat tiempo real)...
call npm install socket.io-client

echo.
echo 🌐 Instalando axios (peticiones HTTP)...
call npm install axios

echo.
echo 🎨 Verificando tailwindcss...
call npm list tailwindcss >nul 2>&1
if %ERRORLEVEL% == 0 (
    echo ✅ tailwindcss ya está instalado
) else (
    echo 📦 Instalando tailwindcss...
    call npm install -D tailwindcss postcss autoprefixer
)

echo.
echo ✅ ========================================
echo 💜 DEPENDENCIAS INSTALADAS
echo ✅ ========================================
echo.
echo 🎯 Dependencias instaladas:
echo    - lucide-react (iconos)
echo    - socket.io-client (websockets)
echo    - axios (HTTP requests)
echo    - tailwindcss (estilos)
echo.
echo 🚀 Ahora puedes ejecutar: recuperar-espectacular.bat
echo.
pause