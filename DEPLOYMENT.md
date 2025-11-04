# GitHub Pages Deployment Guide

## 🚀 Steps to Deploy Your Website

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the `+` icon in the top right corner
3. Select "New repository"
4. Fill in:
   - **Repository name**: Choose a name (e.g., `forsa-plus-website`)
   - **Description**: "4ward Tunisia - Forsa + Website"
   - Make it **Public**
   - **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### 2. Update Configuration Files

Before deploying, you need to update two files with your GitHub information:

#### Update `package.json`:
Replace this line:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
```

With your actual GitHub username and repository name:
```json
"homepage": "https://your-username.github.io/forsa-plus-website",
```

#### Update `vite.config.ts`:
Replace this line:
```typescript
base: '/YOUR_REPO_NAME/',
```

With your repository name:
```typescript
base: '/forsa-plus-website/',
```

### 3. Initialize Git and Push to GitHub

Open PowerShell in your project folder and run these commands:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Forsa + Website"

# Add your GitHub repository as remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages

Once your code is on GitHub, deploy with:

```powershell
npm run deploy
```

This command will:
- Build your project (`npm run build`)
- Create a `gh-pages` branch
- Deploy the `dist` folder to GitHub Pages

### 5. Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select `gh-pages` branch
5. Click "Save"

### 6. Visit Your Website! 🎉

Your website will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

It may take a few minutes for the site to go live the first time.

---

## 🔄 Updating Your Website

Whenever you make changes:

```powershell
# Make your changes to the code
# Then commit and deploy:

git add .
git commit -m "Description of your changes"
git push origin main
npm run deploy
```

---

## 📝 Important Notes

- The `homepage` field in `package.json` must match your GitHub Pages URL
- The `base` in `vite.config.ts` must match your repository name
- Your repository must be **public** for GitHub Pages to work (or you need GitHub Pro)
- After running `npm run deploy`, wait 2-3 minutes for changes to appear

---

## 🆘 Troubleshooting

**Problem**: Site shows 404 or blank page
- Check that `homepage` and `base` are correctly configured
- Verify the `gh-pages` branch exists in your repository
- Check that GitHub Pages is enabled in repository settings

**Problem**: Changes not appearing
- Wait a few minutes (GitHub Pages can take 5-10 minutes to update)
- Clear your browser cache
- Check the Actions tab on GitHub for build status

---

## 📧 Contact Form Setup

Your contact form uses Supabase. To make it work:

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your project URL and anon key
4. Create a `.env` file with:
   ```
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```
5. For GitHub Pages, add these as repository secrets in Settings > Secrets

---

Good luck with your deployment! 🚀
