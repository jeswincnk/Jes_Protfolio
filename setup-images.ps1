# PowerShell script to set up images in public folder
# Run this if you need to re-copy images

$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$publicPath = Join-Path $projectPath "public"

# Create public folder if it doesn't exist
if (-not (Test-Path $publicPath)) {
    New-Item -ItemType Directory -Path $publicPath
    Write-Host "Created public folder"
}

# Copy images with spaces in filename to public folder with cleaner names
$images = @(
    @{Source = "jeswin photo (1).png"; Dest = "jeswin-photo-1.png"},
    @{Source = "jeswin photo (2).png"; Dest = "jeswin-photo-2.png"}
)

foreach ($img in $images) {
    $sourcePath = Join-Path $projectPath $img.Source
    $destPath = Join-Path $publicPath $img.Dest
    
    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "Copied $($img.Source) to $($img.Dest)"
    } else {
        Write-Host "Warning: $($img.Source) not found"
    }
}

Write-Host "Image setup complete!"

