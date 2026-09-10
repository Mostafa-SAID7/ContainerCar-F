#!/bin/bash

# Create Release Script
# Usage: ./scripts/create-release.sh 1.0.0

VERSION=${1:-1.0.0}
REPO="Mostafa-SAID7/ContainerCar-F"

if [[ ! $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "❌ Invalid version format: $VERSION"
  echo "Use format: X.Y.Z (e.g., 1.0.0)"
  exit 1
fi

echo "🚀 Creating release v$VERSION for $REPO"

# Build the release
echo "📦 Building production bundle..."
npm run build || exit 1

# Create archive
echo "📦 Creating release archive..."
mkdir -p dist-archive
cd dist
tar -czf ../dist-archive/containercar-$VERSION.tar.gz .
cd ..

# Create release via GitHub API
echo "📢 Creating GitHub release..."
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/$REPO/releases \
  -d "{
    \"tag_name\": \"v$VERSION\",
    \"name\": \"v$VERSION\",
    \"body\": \"# Release v$VERSION\n\n## What's New\nSee [CHANGELOG.md](https://github.com/$REPO/blob/main/CHANGELOG.md) for details.\n\n## Download\n- Build Artifact: containercar-$VERSION.tar.gz\",
    \"draft\": false,
    \"prerelease\": false
  }" \
  || exit 1

echo "✅ Release v$VERSION created successfully!"
echo "🔗 View at: https://github.com/$REPO/releases/tag/v$VERSION"
