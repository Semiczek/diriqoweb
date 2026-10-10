@echo off
cd /d "%~dp0"
if not exist node_modules\next\package.json (
 call npm ci
 if errorlevel 1 exit /b 1
)
call npm run build
if errorlevel 1 exit /b 1
echo.
echo Otevrete http://127.0.0.1:4180/cs
echo Ukonceni nahledu: Ctrl+C
call npm run start -- --hostname 127.0.0.1 --port 4180
