npm ci
npm run bootstrap -- --force-local --registry https://msazure.pkgs.visualstudio.com/OneAgile/_packaging/jb/npm/registry/
npm run build

$packages = "api", "bundle", "component", "core"
$packages | % {
    cd ".\packages\$_"
    npm version patch
    npm publish
    cd ..\..
}

# Clean install:
cd .\packages
git clean -dfxq
cd ..

<# $src = "H:\Code\power-platform-ux\common\temp\node_modules\.pnpm"

# Create a map of package name to source directory
$packages = @{
    "botframework-webchat"           = "H:\Code\BotFramework-WebChat\packages\bundle"
    "botframework-webchat-core"      = "H:\Code\BotFramework-WebChat\packages\core"
    "botframework-webchat-api"       = "H:\Code\BotFramework-WebChat\packages\api"
    "botframework-webchat-component" = "H:\Code\BotFramework-WebChat\packages\component"
}

$mcsDependencies = GCI "$src\botframework-*" -Directory

foreach ($mcsDependency in $mcsDependencies) {
    $childDependencies = GCI "$mcsDependency\node_modules\*" -Directory

    foreach ($childDependency in $childDependencies) {
        $childDependencyName = $childDependency.Name
        
        # If we have new source files for the dependency, we need to copy them over
        if ($packages[$childDependencyName]) {
            Write-Output "[$(Get-Date -F G)] Processing $childDependency"
            # Copy dist and lib and src files to the node_modules folder
            "lib", "dist", "src" | ForEach-Object {
                if (Test-Path "$($packages[$childDependencyName])\$_") {
                    Copy-Item "$($packages[$childDependencyName])\$_" $childDependency -Recurse -Force
                }
            }            
        }
    }
}
 #>