@echo off
echo ==============================================
echo   Deploying changes to Live Vercel Site...
echo ==============================================
cd /d "%~dp0"
call npx.cmd vercel --prod --yes
echo.
echo ==============================================
echo   Deployment Complete! Live site updated at:
echo   https://siraj-website-swart.vercel.app
echo ==============================================
pause
