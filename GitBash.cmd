@echo off

setlocal EnableDelayedExpansion
set "DEBUG="
::set "DEBUG=1"

if "%DEBUG%"=="1"  echo: & echo ---^> GitBash.cmd

set "CONFIG=%USERPROFILE%\_Works\Cmds\.config"

:: VERS: app version (number or empty)
:: BITS: bits (32 or 64 or empty) 
call %CONFIG%\_git_env.cmd VERS:2.15.0 BITS:64

if "%DEBUG%"=="" start /b "Git-bash" "git-bash.exe"

if "%DEBUG%"=="1" echo: & echo ^<--- GitBash.cmd & echo: & pause
