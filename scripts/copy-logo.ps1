$src = "C:\Users\beenyprinting\Downloads\white_icon_transparent_background.png"
$destDir = Join-Path $PSScriptRoot "..\src\assets"
$dest = Join-Path $destDir "logo.png"

if (-not (Test-Path $src)) {
  Write-Error "Logo not found: $src"
  exit 1
}

New-Item -ItemType Directory -Force -Path $destDir | Out-Null
Copy-Item -LiteralPath $src -Destination $dest -Force
Write-Host "Copied logo to $dest"
