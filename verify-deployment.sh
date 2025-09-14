#!/bin/bash

# Simple deployment verification script
echo "🚀 Verifying Rise Edu Consult deployment configuration..."

# Check if all deployment files exist
echo "📋 Checking deployment files:"

files=(
    "public/CNAME"
    ".github/workflows/deploy.yml"
    "netlify.toml"
    "vercel.json"
    "public/.htaccess"
    ".env.production"
    "DEPLOYMENT.md"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Verify CNAME content
echo -e "\n🔍 Verifying CNAME configuration:"
if [ -f "public/CNAME" ]; then
    cname_content=$(cat public/CNAME)
    if [ "$cname_content" = "riseedu.com" ]; then
        echo "✅ CNAME correctly set to riseedu.com"
    else
        echo "❌ CNAME content incorrect: $cname_content"
    fi
fi

# Check package.json homepage
echo -e "\n🏠 Verifying package.json homepage:"
homepage=$(grep -o '"homepage":[^,]*' package.json | cut -d'"' -f4)
if [ "$homepage" = "https://riseedu.com" ]; then
    echo "✅ Homepage correctly set to https://riseedu.com"
else
    echo "❌ Homepage incorrect or missing: $homepage"
fi

# Verify build works
echo -e "\n🔨 Testing build process:"
if npm run build >/dev/null 2>&1; then
    echo "✅ Build successful"
    
    # Check if CNAME is in build folder
    if [ -f "build/CNAME" ]; then
        echo "✅ CNAME included in build output"
    else
        echo "❌ CNAME missing from build output"
    fi
    
    # Check if .htaccess is in build folder
    if [ -f "build/.htaccess" ]; then
        echo "✅ .htaccess included in build output"
    else
        echo "❌ .htaccess missing from build output"
    fi
else
    echo "❌ Build failed"
fi

echo -e "\n🎉 Deployment verification complete!"
echo "📖 See DEPLOYMENT.md for hosting instructions"