@echo off
title Biblioteca Fantastica de Aventuras - Libros-Juego Interactivos
echo ========================================================
echo   Iniciando BIBLIOTECA FANTASTICA DE AVENTURAS...
echo   (Coleccion de Libros-Juego Interactivos de Doble Pagina)
echo ========================================================
echo.
start http://localhost:8080/index.html
python -m http.server 8080 --directory "%~dp0web_app"
pause
